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
                <div
                    class="flex flex-wrap justify-center gap-4 text-sm text-gray-600 print:gap-2"
                >
                    <span>
                        Saint Charles, MO • benjamin.g.everly@gmail.com • (636)
                        xxx-xxxx <br />
                        github.com/ben-everly • beneverly.com
                    </span>
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
                    <div class="mb-6">
                        <div class="mb-2 flex items-start justify-between">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    Lead Software Engineer
                                </h3>
                                <p class="text-gray-600">
                                    Universal Research Solutions
                                </p>
                            </div>
                            <span
                                class="text-right text-sm font-medium text-gray-500"
                            >
                                Columbia, MO <br />
                                May 2022 - Present
                            </span>
                        </div>
                        <ul
                            class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                        >
                            <li>
                                Architect and implement scalable web
                                applications using Laravel and Livewire
                            </li>
                            <li>
                                Lead cross-functional team to deliver
                                high-quality applications on time
                            </li>
                            <li>
                                Collaborate with stakeholders to gather
                                requirements and translate them into technical
                                Solutions
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6">
                        <div class="mb-2 flex items-start justify-between">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    Senior Software Engineer
                                </h3>
                                <p class="text-gray-600">
                                    Universal Research Solutions
                                </p>
                            </div>
                            <span
                                class="text-right text-sm font-medium text-gray-500"
                            >
                                Columbia, MO <br />
                                July 2015 - May 2022
                            </span>
                        </div>
                        <ul
                            class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                        >
                            <li>
                                Contribute to system design and technical
                                decision-making processes
                            </li>
                            <li>
                                Mentor junior developers and enforce best
                                practices
                            </li>
                            <li>Ensure security best practices</li>
                        </ul>
                    </div>

                    <div class="mb-6">
                        <div class="mb-2 flex items-start justify-between">
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    Software Engineer
                                </h3>
                                <p class="text-gray-600">
                                    Universal Research Solutions
                                </p>
                            </div>
                            <span
                                class="text-right text-sm font-medium text-gray-500"
                            >
                                Columbia, MO <br />
                                July 2010 - Jan 2014
                            </span>
                        </div>
                        <ul
                            class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                        >
                            <li>Develop and maintain software solutions</li>
                            <li>
                                Collaborate with teammates to improve user
                                experience
                            </li>
                            <li>Debug and optimize legacy code</li>
                        </ul>
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
