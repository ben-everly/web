<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8 print:p-6">
            <header class="mb-8 text-center">
                <h1
                    class="mb-2 text-4xl font-bold text-gray-900 print:text-black print:text-2xl"
                >
                    Ben Everly
                </h1>
                <p class="mb-4 text-xl text-gray-600 print:text-black print:text-lg">
                    Full-stack Engineer & Technical Lead
                </p>
                <div class="text-sm text-gray-600 print:text-black">
                    Saint Charles, MO •
                    <a
                        href="mailto:ben.g.everly@gmail.com"
                        target="_blank"
                        class="hover:underline"
                    >
                        ben.g.everly@gmail.com
                    </a>
                    <template v-if="phone">
                        •
                        <a
                            :href="phoneHref"
                            class="hover:underline"
                        >
                            {{ phone }}
                        </a>
                    </template>
                </div>
                <div
                    class="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600 print:text-black"
                >
                    <a
                        href="https://linkedin.com/in/ben-everly"
                        target="_blank"
                        class="flex align-middle hover:underline"
                    >
                        <Icon
                            name="uil:linkedin"
                            class="size-5 transition-transform duration-300"
                            mode="svg"
                        />
                        ben-everly
                    </a>
                    •
                    <a
                        href="https://github.com/ben-everly"
                        target="_blank"
                        class="flex align-middle hover:underline"
                    >
                        <Icon
                            name="uil:github"
                            class="size-5 transition-transform duration-300"
                            mode="svg"
                        />
                        ben-everly
                    </a>
                    •
                    <a
                        href="https://beneverly.com"
                        target="_blank"
                        class="flex align-middle hover:underline"
                    >
                        <Icon
                            name="uil:globe"
                            class="size-5 transition-transform duration-300"
                            mode="svg"
                        />
                        beneverly.com
                    </a>
                </div>
            </header>

            <section class="mb-8 break-inside-avoid">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-black print:pb-1 print:text-xl"
                >
                    Professional Summary
                </h2>
                <p class="leading-relaxed text-gray-700 print:text-black">
                    Full-stack software engineer and technical lead with 15+
                    years building regulated healthcare software in dynamic,
                    fast-paced environments. Equally comfortable as a hands-on
                    engineer &mdash; shipping modern-stack rewrites,
                    high-volume data integrations, and compliance-critical
                    systems &mdash; and as a team lead focused on software
                    architecture and data-driven engineering standards.
                </p>
            </section>

            <section class="mb-8">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-black print:pb-1 print:text-xl"
                >
                    Professional Experience
                </h2>

                <div class="mb-6">
                    <div class="flex justify-between">
                        <h3
                            class="mb-1 text-xl font-bold text-gray-900 print:text-black print:text-lg"
                        >
                            Universal Research Solutions
                        </h3>
                        <div
                            class="text-right text-sm font-medium text-gray-500 print:text-black"
                        >
                            Columbia, MO
                        </div>
                    </div>
                    <div class="ml-4">
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900 print:text-black">
                                    Senior Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500 print:text-black"
                                >
                                    Apr 2022 - Present
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-2 text-gray-700 print:text-black"
                            >
                                <li>
                                    Built a DORA metrics dashboard in Grafana,
                                    sourced from GitHub/Jira APIs and
                                    PHPMetrics via GitHub Actions, and used it
                                    to anchor team performance discussions,
                                    driving a 58% reduction in lead time and a
                                    19% increase in deployment frequency.
                                </li>
                                <li>
                                    Served as Team Lead, driving a 3x increase
                                    in test coverage (from 26% to over 80%) on
                                    our ground-up TALL-stack rewrite by
                                    establishing PR review standards and
                                    personally enforcing them as a code owner
                                    alongside the CTO and CIO.
                                </li>
                                <li>
                                    Partnered with product, design, and
                                    client strategy to translate compliance
                                    and clinical workflow requirements into
                                    an FDA 21 CFR Part 11&ndash;compliant
                                    eConsent system, delivering a major
                                    contract requirement for our AO Foundation
                                    research partnership.
                                </li>
                                <li>
                                    Architected a CSV ingestion system that
                                    enabled customer migrations from competitor
                                    platforms, using user-configurable column
                                    mapping to bridge disparate source schemas
                                    and partitioned MySQL staging tables to
                                    drive parallel processing of 100k+ row
                                    imports.
                                </li>
                                <!-- <li>
                                    Authored comprehensive technical
                                    documentation and system architecture
                                    Mermaid diagrams, capturing complex design
                                    decisions and technical roadmaps within
                                    GitHub and Jira to align the engineering
                                    team.
                                </li> -->
                            </ul>
                        </div>
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900 print:text-black">
                                    Software Developer Expert
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500 print:text-black"
                                >
                                    Jan 2016 - Apr 2022
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-2 text-gray-700 print:text-black"
                            >
                                <li>
                                    Built ECS service configurations, S3
                                    storage, and security group rules for new
                                    microservices that gradually replaced
                                    parts of our legacy monolith, enabling
                                    independent deployment of new
                                    functionality.
                                </li>
                                <li>
                                    Upskilled junior developers through rigorous
                                    peer code reviews and pair programming,
                                    focusing on pragmatic coding principles and
                                    the application of standard design patterns
                                    to ensure maintainable, high-quality code.
                                </li>
                                <li>
                                    Enhanced HL7-based integrations with
                                    external systems including Epic EHR on a
                                    platform that has automated transmission of
                                    over 22 million clinical messages.
                                </li>
                                <!-- 2014-2017 -->
                                <!-- <li>
                                    Implemented a data visualization tool using
                                    Highcharts, leveraging server-side data
                                    aggregation to maintain high-speed
                                    performance for complex cascading filters
                                    across hundreds of thousands of data points.
                                </li> -->
                                <!-- any operational ownership or security/complicance? -->
                                <!-- something with hipaa compliance? -->
                                <!-- observability, logging, monitoring, alerting? -->
                            </ul>
                        </div>
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900 print:text-black">
                                    Systems Engineer Expert
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500 print:text-black"
                                >
                                    Jul 2010 - Jan 2016
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-2 text-gray-700 print:text-black"
                            >
                                <!-- 2014 -->
                                <li>
                                    Designed and developed an interactive SMS
                                    messaging system via the Twilio API,
                                    building automated workflows for appointment
                                    reminders and conversational data collection
                                    to allow patients to complete health forms
                                    via text.
                                </li>
                                <!-- 2012 -->
                                <li>
                                    Engineered an automated reporting system
                                    using TCPDF and Cron-based scheduling to
                                    track individual patient progress over
                                    time. This system has remained in
                                    continuous production for 12+ years,
                                    reliably delivering thousands of reports to
                                    clients.
                                </li>
                                <!-- 2012-2015 implenented patient login flow, econsent filling, triggering automatic form export via hl7 -->
                                <!-- <li>
                                    Contributed to the development of a patient
                                    portal, implementing features such as
                                    authentication, appointment request systems,
                                    and form access.
                                </li> -->
                                <!-- <li>
                                    Implemented clinical scoring systems,
                                    including integrations with external
                                    services.
                                </li> -->
                                <!-- 2014 -->
                                <li>
                                    Ensured regulatory compliance (HIPAA) across
                                    new feature sets by implementing secure
                                    patient authentication flows and robust
                                    access controls, safeguarding sensitive
                                    PHI/PII data.
                                </li>
                                <!-- <li>
                                    Maintained and extended legacy PHP
                                    codebases while providing 24/7 on-call
                                    support, rapidly diagnosing and resolving
                                    incidents to minimize downtime for critical
                                    healthcare workflows.
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-8 break-inside-avoid">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-black print:pb-1 print:text-xl"
                >
                    Education
                </h2>

                <div class="mb-4">
                    <div class="mb-2 flex items-start justify-between">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 print:text-black">
                                Missouri University of Science and Technology
                            </h3>
                            <p class="text-gray-600 print:text-black">B.S. Computer Science</p>
                        </div>
                        <div>
                            <div
                                class="text-right text-sm font-medium text-gray-500 print:text-black"
                            >
                                Rolla, MO <br />
                                2010
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-8 break-inside-avoid">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-black print:pb-1 print:text-xl"
                >
                    Technical Skills
                </h2>

                <div class="space-y-2">
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">Languages:</strong>
                        PHP, JavaScript, TypeScript
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">Primary Stack:</strong>
                        Laravel, Livewire, Alpine.js, Tailwind CSS, PHPUnit/Pest
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">Other Experience:</strong>
                        Node, React, Next, Vue, Nuxt
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">Data:</strong>
                        MySQL, SQLite, PostgreSQL, Redis, Elasticsearch
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">Infrastructure & DevOps:</strong>
                        AWS (ECS, S3, CloudFront), Docker, GitHub Actions
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong class="font-semibold text-gray-900 print:text-black">AI-Assisted Development:</strong>
                        Claude Code, GitHub Copilot, OpenCode
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    const phone = useRuntimeConfig().public.phone;
    const phoneHref = phone
        ? `tel:+1${phone.replace(/\D/g, "")}`
        : "";

    useHead({
        title: "Resume - Ben Everly",
        meta: [
            {
                name: "description",
                content: "Ben Everly - Software Engineer Resume",
            },
        ],
    });
</script>
