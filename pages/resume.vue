<template>
    <div class="min-h-screen bg-white">
        <!-- Print-optimized resume -->
        <div class="mx-auto max-w-4xl p-8 print:p-6">
            <!-- Header -->
            <header class="mb-8 text-center print:mb-6">
                <h1
                    class="mb-2 text-4xl font-bold text-gray-900 print:text-3xl"
                >
                    Ben Everly
                </h1>
                <p class="mb-4 text-xl text-gray-600 print:text-lg">
                    Software Engineer & Problem Solver
                </p>
                <div class="justify-center text-sm text-gray-600">
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
                    <div class="flex align-middle">beneverly.com</div>
                </div>
            </header>

            <!-- Professional Summary -->
            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
                >
                    Professional Summary
                </h2>
                <p class="leading-relaxed text-gray-700">
                    Adaptable software engineer with over 15 years of expertise
                    in developing innovative solutions and solving complex
                    problems. Currently specializing in medical software
                    development with a focus on patient-reported outcomes data.
                    Passionate about building scalable applications and
                    exploring emerging technologies while thriving in dynamic,
                    fast-paced settings.
                </p>
            </section>

            <!-- Professional Experience -->
            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
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
                        <div class="mb-6">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Senior Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    May 2022 - Present
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                            >
                                <li>
                                    Delivered projects on schedule while leading
                                    a cross-functional team of 5-6 developers in
                                    an Agile environment.
                                </li>
                                <li>
                                    Implemented processes to measure and improve
                                    team performance, including metrics for code
                                    quality, and deployment frequency.
                                </li>
                                <li>
                                    Spearheaded an initiative that increased
                                    test coverage from 25.9% to 70.1%,
                                    significantly reducing production bugs.
                                </li>
                                <li>
                                    Introduced a code review checklist,
                                    improving code quality and reducing
                                    post-deployment issues.
                                </li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Systems Engineer Expert
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    Jan 2014 - May 2022
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                            >
                                <li>
                                    Worked in a team to migrate legacy
                                    monolithic applications to a microservices
                                    architecture, boosting scalability and
                                    maintainability.
                                </li>
                                <li>
                                    Mentored junior developers, enhancing
                                    overall code quality and leading to
                                    measurable improvements in team velocity.
                                </li>
                                <li>
                                    Contributed to development of data
                                    integration pipelines using healthcare
                                    standards (HL7) as well as custom
                                    integrations with Epic.
                                </li>
                                <li>
                                    Led development of a graphical data
                                    visualization platform for patient data
                                    handling tens of thousands of data points at
                                    a time and including complex filtering
                                    options.
                                </li>
                                <li>
                                    Led development of a PDF report generation
                                    system supporting scheduled and on-demand
                                    reports, satisfying time sensitive client
                                    needs.
                                </li>
                            </ul>
                        </div>
                        <div class="mb-6">
                            <div class="mb-2 flex items-start justify-between">
                                <h4 class="text-lg font-semibold text-gray-900">
                                    Junior Software Engineer
                                </h4>
                                <div
                                    class="text-right text-sm font-medium text-gray-500"
                                >
                                    July 2010 - Jan 2014
                                </div>
                            </div>
                            <ul
                                class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                            >
                                <li>
                                    Contributed to the development of a patient
                                    portal, implementing features such as
                                    authentication, appointment request systems,
                                    and form access.
                                </li>
                                <li>
                                    Enhanced patient notifications by
                                    integrating Twilio API for SMS and VoIP,
                                    including interactive systems for form
                                    completion.
                                </li>
                                <li>
                                    Implemented clinical scoring systems,
                                    including integrations with external
                                    services.
                                </li>
                                <li>
                                    Contributed to security systems complying
                                    with HIPAA, passing all audits with zero
                                    violations over a 15-year period.
                                </li>
                                <li>
                                    Provided on-call support for critical
                                    production bugs, resolving issues in legacy
                                    systems to ensure reliability and uptime.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Education -->
            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
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

            <!-- Technical Skills -->
            <section class="mb-8 break-inside-avoid print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
                >
                    Technical Skills
                </h2>

                <div
                    class="grid grid-cols-1 gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-4"
                >
                    <!-- Languages -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Languages
                        </h3>
                        <p class="text-gray-700">
                            PHP, JavaScript, TypeScript, SQL, Bash
                        </p>
                    </div>

                    <!-- Frameworks -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Frameworks
                        </h3>
                        <p class="text-gray-700">
                            Laravel, Livewire, PHPUnit, Alpine
                        </p>
                        <p class="mt-1 text-gray-600">Vue, Nuxt, React, Next</p>
                    </div>

                    <!-- Frontend & Styling -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Frontend & Styling
                        </h3>
                        <p class="text-gray-700">
                            HTML5, CSS3, TailwindCSS, Responsive Design
                        </p>
                    </div>

                    <!-- Database & Infrastructure -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Database & Infrastructure
                        </h3>
                        <p class="text-gray-700">
                            MySQL, Redis, Meilisearch, RabbitMQ, Linux, Docker,
                            AWS, Github Actions, Codeship, Ansible, Pulumi
                        </p>
                    </div>

                    <!-- Compliance & Standards -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Compliance & Standards
                        </h3>
                        <p class="text-gray-700">
                            HIPAA, FDA 21 CFR Part 11, HL7, FHIR
                        </p>
                    </div>

                    <!-- Tools -->
                    <div>
                        <h3 class="mb-2 text-lg font-semibold text-gray-900">
                            Tools
                        </h3>
                        <p class="text-gray-700">
                            Neovim, Git, GitHub, Jira, Linear, Composer, npm
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
