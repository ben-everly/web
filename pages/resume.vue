<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8 print:p-6">
            <DocumentHeader header-class="mb-8 text-center print:mb-6" />

            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-3 print:pb-1 print:text-xl print:text-black"
                >
                    Professional Summary
                </h2>
                <p class="leading-relaxed text-gray-700 print:text-black">
                    Full-stack software engineer with 15+ years building
                    regulated, HIPAA-compliant healthcare software including
                    eConsent, EHR integrations, and patient messaging. I've also
                    led engineering teams, focusing on software architecture and
                    team metrics.
                </p>
            </section>

            <section class="mb-8 print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-3 print:pb-1 print:text-xl print:text-black"
                >
                    Professional Experience
                </h2>

                <div class="mb-6">
                    <div class="flex justify-between">
                        <h3
                            class="mb-1 text-xl font-bold text-gray-900 print:text-lg print:text-black"
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
                        <div class="mb-6 print:mb-4">
                            <div class="mb-2 flex items-start justify-between">
                                <h4
                                    class="text-lg font-semibold text-gray-900 print:text-black"
                                >
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
                                    Built a Grafana dashboard with DORA and
                                    other engineering metrics, pulled from
                                    GitHub/Jira APIs and PHPMetrics via GitHub
                                    Actions. Used it to ground team
                                    retrospectives. In the first three months,
                                    lead time dropped by 58% and deployment
                                    frequency increased by 19%.
                                </li>
                                <li>
                                    Led one of two engineering teams on a TALL
                                    stack rewrite of our core application.
                                    Established PR review standards and enforced
                                    them as a code owner alongside the CTO and
                                    CIO, tripling test coverage from 26% to over
                                    80%.
                                </li>
                                <li>
                                    Collaborated with product, design, and
                                    client strategy to ship an FDA 21 CFR Part
                                    11&ndash;compliant eConsent system,
                                    delivering a major contract requirement for
                                    our AO Foundation research partnership.
                                </li>
                                <li>
                                    Designed a CSV ingestion system that enabled
                                    customer migrations from competitor
                                    platforms, using MySQL staging tables to
                                    support user-configurable column mappings,
                                    schema validation, and parallel processing
                                    of 100k+ row imports.
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
                        <div class="mb-6 print:mb-4">
                            <div class="mb-2 flex items-start justify-between">
                                <h4
                                    class="text-lg font-semibold text-gray-900 print:text-black"
                                >
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
                                <!-- 2014-2017 -->
                                <li>
                                    Created an SMS messaging system using the
                                    Twilio API for appointment reminders and
                                    conversational medical form completion.
                                    Delivered 900k+ patient messages to date.
                                </li>
                                <li>
                                    Set up ECS services, S3 storage, and
                                    security groups for microservices that
                                    replaced parts of our legacy monolith,
                                    enabling independent deployment of new
                                    functionality.
                                </li>
                                <li>
                                    Mentored junior developers through code
                                    reviews and pair programming, focusing on
                                    pragmatic coding principles and the
                                    application of design patterns to raise
                                    overall code quality.
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
                        <div class="mb-6 print:mb-4">
                            <div class="mb-2 flex items-start justify-between">
                                <h4
                                    class="text-lg font-semibold text-gray-900 print:text-black"
                                >
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
                                <!-- 2012 -->
                                <li>
                                    Built an automated reporting system using
                                    TCPDF and Cron-based scheduling to track
                                    individual patient progress over time. This
                                    code has remained in production for 12+
                                    years and delivered thousands of reports to
                                    clients.
                                </li>
                                <li>
                                    Maintained and extended HL7 integrations
                                    with external clinical systems including
                                    Epic EHR, enabling bi-directional patient
                                    data exchange.
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
                                <!-- <li>
                                    Ensured regulatory compliance (HIPAA) across
                                    new feature sets by implementing secure
                                    patient authentication flows and robust
                                    access controls, safeguarding sensitive
                                    PHI/PII data.
                                </li> -->
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

            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-3 print:pb-1 print:text-xl print:text-black"
                >
                    Education
                </h2>

                <div class="mb-4">
                    <div class="mb-2 flex items-start justify-between">
                        <div>
                            <h3
                                class="text-lg font-semibold text-gray-900 print:text-black"
                            >
                                Missouri University of Science and Technology
                            </h3>
                            <p class="text-gray-600 print:text-black">
                                B.S. Computer Science
                            </p>
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

            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-3 print:pb-1 print:text-xl print:text-black"
                >
                    Personal Projects
                </h2>

                <ul
                    class="ml-4 list-inside list-disc space-y-2 text-gray-700 print:text-black"
                >
                    <li>
                        <a
                            href="https://github.com/ben-everly/sous"
                            target="_blank"
                            rel="noopener"
                            class="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900 print:text-black"
                        >
                            Sous
                        </a>
                        &mdash; Meal-planning web app on Next.js and Supabase,
                        with domain rules enforced in Postgres via row-level
                        security and covered by Vitest, Playwright, and pgTAP
                        tests.
                    </li>
                    <li>
                        <a
                            href="https://github.com/ben-everly/claude-plugins"
                            target="_blank"
                            rel="noopener"
                            class="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900 print:text-black"
                        >
                            claude-plugins
                        </a>
                        &mdash; A published marketplace of AI agentic developer
                        tools for Claude Code: skills, slash commands, and
                        agents that orchestrate multi-step planning, review, and
                        delivery workflows across the software development
                        lifecycle.
                    </li>
                    <!-- <li>
                        <a
                            href="https://github.com/ben-everly/dotfiles"
                            target="_blank"
                            rel="noopener"
                            class="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900 print:text-black"
                        >
                            Dotfiles &amp; provisioning
                        </a>
                        &mdash; Neovim (Lua) configuration and Ansible playbooks
                        for reproducible, one-command machine setup.
                    </li> -->
                </ul>
            </section>

            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-3 print:pb-1 print:text-xl print:text-black"
                >
                    Technical Skills
                </h2>

                <div class="space-y-1">
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Languages:</strong
                        >
                        PHP, JavaScript, TypeScript
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Primary Stack:</strong
                        >
                        Laravel, Livewire, Alpine.js, Tailwind CSS, PHPUnit/Pest
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Other Frameworks:</strong
                        >
                        React, Next, Vue, Nuxt
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Data:</strong
                        >
                        MySQL, SQLite, PostgreSQL, Redis, Meilisearch
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Infrastructure & DevOps:</strong
                        >
                        AWS (ECS, S3, CloudFront), GitHub Actions, Pulumi
                    </p>
                    <p class="text-gray-700 print:text-black">
                        <strong
                            class="font-semibold text-gray-900 print:text-black"
                            >Tools:</strong
                        >
                        Docker, Neovim, GitHub CLI, Claude Code, GitHub Copilot
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
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
