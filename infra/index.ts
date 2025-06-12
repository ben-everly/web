import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as synced_folder from "@pulumi/synced-folder";

const errorDocument = "404.html";

// Create an S3 bucket and configure it as a website.
const bucket = new aws.s3.BucketV2("beneverly.com");

const bucketWebsite = new aws.s3.BucketWebsiteConfigurationV2("bucketWebsite", {
    bucket: bucket.bucket,
    indexDocument: { suffix: "index.html" },
    errorDocument: { key: errorDocument },
});

// Configure ownership controls for the new S3 bucket
const ownershipControls = new aws.s3.BucketOwnershipControls(
    "ownership-controls",
    {
        bucket: bucket.bucket,
        rule: {
            objectOwnership: "ObjectWriter",
        },
    },
);

// Configure public ACL block on the new S3 bucket
const publicAccessBlock = new aws.s3.BucketPublicAccessBlock(
    "public-access-block",
    {
        bucket: bucket.bucket,
        blockPublicAcls: false,
    },
);

// Use a synced folder to manage the files of the website.
const bucketFolder = new synced_folder.S3BucketFolder(
    "bucket-folder",
    {
        path: "../.output/public",
        bucketName: bucket.bucket,
        acl: "public-read",
    },
    { dependsOn: [ownershipControls, publicAccessBlock] },
);

const eastRegion = new aws.Provider("east", {
    profile: aws.config.profile,
    region: "us-east-1",
});

const certificateConfig: aws.acm.CertificateArgs = {
    domainName: "beneverly.com",
    validationMethod: "DNS",
    subjectAlternativeNames: [`www.beneverly.com`],
};

const certificate = new aws.acm.Certificate("certificate", certificateConfig, {
    provider: eastRegion,
});

const zoneId = aws.route53
    .getZone({ name: "beneverly.com" }, { async: true })
    .then((zone) => zone.zoneId);

const certificateValidationDomain = new aws.route53.Record(
    `beneverly.com-validation`,
    {
        name: certificate.domainValidationOptions[0].resourceRecordName,
        zoneId: zoneId,
        type: certificate.domainValidationOptions[0].resourceRecordType,
        records: [certificate.domainValidationOptions[0].resourceRecordValue],
        ttl: 600,
    },
);

const subdomainCertificateValidationDomain = new aws.route53.Record(
    `beneverly.com-www-validation`,
    {
        name: certificate.domainValidationOptions[1].resourceRecordName,
        zoneId: zoneId,
        type: certificate.domainValidationOptions[1].resourceRecordType,
        records: [certificate.domainValidationOptions[1].resourceRecordValue],
        ttl: 600,
    },
);

const certificateValidation = new aws.acm.CertificateValidation(
    "certificateValidation",
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: [
            certificateValidationDomain.fqdn,
            subdomainCertificateValidationDomain.fqdn,
        ],
    },
    { provider: eastRegion },
);

// Create a CloudFront CDN to distribute and cache the website.
const cdn = new aws.cloudfront.Distribution("cdn", {
    enabled: true,
    aliases: ["beneverly.com", "www.beneverly.com"],
    origins: [
        {
            originId: bucket.arn,
            domainName: bucketWebsite.websiteEndpoint,
            customOriginConfig: {
                originProtocolPolicy: "http-only",
                httpPort: 80,
                httpsPort: 443,
                originSslProtocols: ["TLSv1.2"],
            },
        },
    ],
    defaultCacheBehavior: {
        targetOriginId: bucket.arn,
        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD", "OPTIONS"],
        cachedMethods: ["GET", "HEAD", "OPTIONS"],
        defaultTtl: 600,
        maxTtl: 600,
        minTtl: 600,
        forwardedValues: {
            queryString: true,
            cookies: {
                forward: "all",
            },
        },
    },
    priceClass: "PriceClass_100",
    customErrorResponses: [
        {
            errorCode: 404,
            responseCode: 404,
            responsePagePath: `/${errorDocument}`,
        },
    ],
    restrictions: {
        geoRestriction: {
            restrictionType: "none",
        },
    },
    viewerCertificate: {
        acmCertificateArn: certificateValidation.certificateArn,
        sslSupportMethod: "sni-only",
    },
});

// Creates a new Route53 DNS record pointing the domain to the CloudFront distribution.
new aws.route53.Record("beneverly.com", {
    name: "",
    zoneId: zoneId,
    type: "A",
    aliases: [
        {
            name: cdn.domainName,
            zoneId: cdn.hostedZoneId,
            evaluateTargetHealth: true,
        },
    ],
});
new aws.route53.Record("beneverly.com-www-alias", {
    name: "www.beneverly.com",
    zoneId: zoneId,
    type: "A",
    aliases: [
        {
            name: cdn.domainName,
            zoneId: cdn.hostedZoneId,
            evaluateTargetHealth: true,
        },
    ],
});

// Export the URLs and hostnames of the bucket and distribution.
export const originURL = pulumi.interpolate`http://${bucketWebsite.websiteEndpoint}`;
export const originHostname = bucketWebsite.websiteEndpoint;
export const cdnURL = pulumi.interpolate`https://${cdn.domainName}`;
export const cdnHostname = cdn.domainName;
