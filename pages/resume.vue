<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8 print:p-6">
            <header class="mb-8 text-center print:mb-4">
                <h1
                    class="mb-2 text-4xl font-bold text-gray-900 print:mb-1 print:text-2xl"
                >
                    Ben Everly
                </h1>
                <p class="mb-4 text-xl text-gray-600 print:mb-2 print:text-lg">
                    Software Engineer & Problem Solver
                </p>
                <div class="text-sm text-gray-600">
                    Saint Charles, MO • benjamin.g.everly@gmail.com • (636)
                    xxx-xxxx
                </div>
                <div
                    class="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600"
                >
                    <div class="flex align-middle">
                        <Icon
                            name="uil:linkedin"
                            class="size-5 transition-transform duration-300"
                        />
                        ben-everly
                    </div>
                    •
                    <div class="flex align-middle">
                        <Icon
                            name="uil:github"
                            class="size-5 transition-transform duration-300"
                        />
                        ben-everly
                    </div>
                    •
                    <div class="flex align-middle">
                        <Icon
                            name="uil:globe"
                            class="size-5 transition-transform duration-300"
                        />
                        beneverly.com
                    </div>
                </div>
            </header>

            <section class="mb-8 break-inside-avoid print:mb-4">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-2 print:pb-1 print:text-xl"
                >
                    Professional Summary
                </h2>
                <p class="leading-relaxed text-gray-700">
                    Adaptable software engineer with over 15 years of expertise
                    in developing innovative solutions and solving complex
                    problems. Specializing in high-reliability medical software
                    development with a focus on patient-reported outcomes data.
                    Passionate about building scalable applications and
                    exploring emerging technologies while thriving in dynamic,
                    fast-paced settings.
                </p>
            </section>

            <section class="mb-8 print:mb-4">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-2 print:pb-1 print:text-xl"
                >
                    Professional Experience
                </h2>

                <div class="mb-6">
                    <div class="flex justify-between">
                        <h3
                            class="mb-1 text-xl font-bold text-gray-900 print:text-lg"
                        >
                            Universal Research Solutions
                        </h3>
                        <div
                            class="text-right text-sm font-medium text-gray-500"
                        >
                            Columbia, MO
                        </div>
                    </div>
                    <div class="ml-4">
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Lead Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    Apr 2022 - Present
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                            >
                                <li>
                                    Led a cross-functional Agile team of 4-6
                                    engineers to reduce lead time for changes by
                                    58% and increase deployment frequency by 19%
                                    through the optimization of team workflows
                                    and improved automated test coverage (26% to
                                    70%).
                                </li>
                                <li>
                                    Established comprehensive team-wide Key
                                    Performance Indicators (KPIs) focused
                                    strictly on code quality, maintainability,
                                    and delivery (e.g., Cyclomatic Complexity,
                                    Technical Debt Ratio (TDR)), successfully
                                    driving a transparent, data-driven culture
                                    across the engineering team.
                                </li>
                                <li>
                                    Collaborated with Product and Design
                                    stakeholders to translate high-level
                                    business objectives into actionable
                                    technical roadmaps, ensuring engineering
                                    efforts remained consistently aligned with
                                    core company priorities.
                                </li>
                            </ul>
                        </div>
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Senior Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    Jan 2016 - Apr 2022
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                            >
                                <li>
                                    Collaborated on the migration of a legacy
                                    monolithic application to a microservices
                                    architecture using Docker and AWS ECS,
                                    eliminating environment-specific bugs by
                                    standardizing the application runtime and
                                    significantly accelerating deployment cycle
                                    times.
                                </li>
                                <li>
                                    Upskilled junior developers through rigorous
                                    peer code reviews and pair programming,
                                    focusing on pragmatic coding principles and
                                    the application of standard design patterns
                                    to ensure maintainable, high-quality code.
                                </li>
                                <li>
                                    Contributed to the enhancement and
                                    maintenance of integration features to
                                    synchronize data with external systems,
                                    including Epic EHR, utilizing HL7 standards
                                    for the automated transmission of over 22
                                    million clinical messages.
                                </li>
                                <!-- 2014-2017 -->
                                <li>
                                    Designed and Implemented a data
                                    visualization platform using Highcharts,
                                    implementing server-side data aggregation to
                                    maintain high-speed performance for complex
                                    cascading filters across hundreds of
                                    thousands of data points.
                                </li>
                                <!-- any operational ownership or security/complicance? -->
                                <!-- something with hipaa compliance? -->
                                <!-- observability, logging, monitoring, alerting? -->
                            </ul>
                        </div>
                        <div class="mb-6 break-inside-avoid">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    Jul 2010 - Jan 2016
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
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
                                    Engineered a longitudinal Patient Reported
                                    Outcome (PRO) reporting system using TCPDF
                                    and Cron-based scheduling that has remained
                                    in continuous production for 12+ years,
                                    reliably delivering thousands of reports to
                                    clients
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
                                    Ensured HIPAA compliance across new feature
                                    sets by implementing secure patient
                                    authentication flows, contributing to the
                                    company’s 15-year record of zero audit
                                    violations.
                                </li>
                                <li>
                                    Ensured system high availability by
                                    providing 24/7 on-call support, identifying
                                    and resolving critical production bugs
                                    within legacy PHP codebases.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-8 break-inside-avoid print:mb-4">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-2 print:pb-1 print:text-xl"
                >
                    Education
                </h2>

                <div class="mb-4">
                    <div class="mb-2 flex items-start justify-between">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">
                                Missouri University of Science and Technology
                            </h3>
                            <p class="text-gray-600">B.S. Computer Science</p>
                        </div>
                        <div>
                            <div
                                class="text-right text-sm font-medium text-gray-500"
                            >
                                Rolla, MO <br />
                                2010
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-8 break-inside-avoid print:mb-4">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:mb-2 print:pb-1 print:text-xl"
                >
                    Technical Skills
                </h2>

                <div
                    class="grid grid-cols-1 gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-4"
                >
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Languages
                        </h3>
                        <p class="text-gray-700">
                            PHP, JavaScript, TypeScript, SQL, Bash
                        </p>
                    </div>

                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Frameworks
                        </h3>
                        <p class="text-gray-700">
                            Laravel, Livewire, PHPUnit, Alpine, Vue, Nuxt,
                            React, Next
                        </p>
                    </div>

                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Frontend & Styling
                        </h3>
                        <p class="text-gray-700">
                            HTML5, CSS3, TailwindCSS, Responsive Design
                        </p>
                    </div>

                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Database & Infrastructure
                        </h3>
                        <p class="text-gray-700">
                            MySQL, Redis, Meilisearch, RabbitMQ, Linux, Docker,
                            AWS, Github Actions, Codeship, Ansible, Pulumi
                        </p>
                    </div>

                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Compliance & Standards
                        </h3>
                        <p class="text-gray-700">
                            HIPAA, FDA 21 CFR Part 11, HL7, FHIR
                        </p>
                    </div>

                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Tools
                        </h3>
                        <p class="text-gray-700">
                            Neovim, Git, GitHub, Jira, Linear, Composer, npm,
                            OpenCode, Claude Code
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
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
