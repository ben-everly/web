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
                    <span>GitHub: github.com/ben-everly</span>
                    <span class="print:hidden">•</span>
                    <span>Email: benjamin.g.everly@gmail.com</span>
                </div>
            </header>

            <!-- Professional Summary -->
            <section class="mb-8 print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
                >
                    Professional Summary
                </h2>
                <p class="leading-relaxed text-gray-700">
                    Experienced software engineer with over 14 years of
                    expertise in developing innovative solutions and solving
                    complex problems. Currently specializing in medical software
                    development with a focus on patient-reported outcomes data.
                    Passionate about building scalable applications and
                    exploring emerging technologies.
                </p>
            </section>

            <!-- Experience -->
            <section class="mb-8 print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
                >
                    Professional Experience
                </h2>

                <div class="mb-6">
                    <div class="mb-2 flex items-start justify-between">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">
                                Software Developer
                            </h3>
                            <p class="text-gray-600">
                                Universal Research Solutions
                            </p>
                        </div>
                        <span class="text-sm font-medium text-gray-500"
                            >July 2010 - Present</span
                        >
                    </div>
                    <ul
                        class="ml-4 list-inside list-disc space-y-1 text-gray-700"
                    >
                        <li>
                            Develop and maintain software solutions for research
                            and data analysis
                        </li>
                        <li>
                            Collaborate with cross-functional teams to deliver
                            high-quality applications
                        </li>
                        <li>
                            Implement best practices in software development and
                            code architecture
                        </li>
                        <li>
                            Contribute to system design and technical
                            decision-making processes
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Education -->
            <section class="mb-8 print:mb-6">
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
                            <p class="text-gray-600">Computer Science</p>
                        </div>
                        <span class="text-sm font-medium text-gray-500"
                            >Rolla, MO</span
                        >
                    </div>
                </div>
            </section>

            <!-- Technical Skills -->
            <section class="mb-8 print:mb-6">
                <h2
                    class="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-900 print:text-xl"
                >
                    Technical Skills
                </h2>

                <div
                    class="grid grid-cols-1 gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-4"
                >
                    <!-- Programming & Frameworks -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold text-gray-900">
                            Programming & Frameworks
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 print:px-2 print:py-1"
                                >PHP</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-red-200 bg-gradient-to-r from-red-50 to-red-100 px-3 py-1.5 text-sm font-medium text-red-800 print:px-2 print:py-1"
                                >Laravel</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 px-3 py-1.5 text-sm font-medium text-purple-800 print:px-2 print:py-1"
                                >Livewire</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-800 print:px-2 print:py-1"
                                >AlpineJS</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800 print:px-2 print:py-1"
                                >Rust</span
                            >
                        </div>
                    </div>

                    <!-- Frontend & Styling -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold text-gray-900">
                            Frontend & Styling
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center rounded-lg border border-cyan-200 bg-gradient-to-r from-cyan-50 to-cyan-100 px-3 py-1.5 text-sm font-medium text-cyan-800 print:px-2 print:py-1"
                                >TailwindCSS</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-800 print:px-2 print:py-1"
                                >WASM</span
                            >
                        </div>
                    </div>

                    <!-- Database & Infrastructure -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold text-gray-900">
                            Database & Infrastructure
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center rounded-lg border border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800 print:px-2 print:py-1"
                                >MySQL</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-green-100 px-3 py-1.5 text-sm font-medium text-green-800 print:px-2 print:py-1"
                                >Docker</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-3 py-1.5 text-sm font-medium text-yellow-800 print:px-2 print:py-1"
                                >AWS</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-3 py-1.5 text-sm font-medium text-yellow-800 print:px-2 print:py-1"
                                >Google Cloud</span
                            >
                        </div>
                    </div>

                    <!-- Tools & Emerging Tech -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold text-gray-900">
                            Tools & Emerging Technologies
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="inline-flex items-center rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 print:px-2 print:py-1"
                                >Github</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-sky-200 bg-gradient-to-r from-sky-50 to-sky-100 px-3 py-1.5 text-sm font-medium text-sky-800 print:px-2 print:py-1"
                                >Neovim</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 px-3 py-1.5 text-sm font-medium text-purple-800 print:px-2 print:py-1"
                                >ML Engineering</span
                            >
                            <span
                                class="inline-flex items-center rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 print:px-2 print:py-1"
                                >AI Tools</span
                            >
                        </div>
                    </div>
                </div>
            </section>

            <!-- Print button (hidden when printing) -->
            <div class="text-center print:hidden">
                <button
                    @click="printResume"
                    class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                >
                    <Icon name="uil:print" class="size-5" />
                    Print Resume
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    // Page metadata
    useHead({
        title: "Resume - Ben Everly",
        meta: [
            {
                name: "description",
                content: "Ben Everly - Software Engineer Resume",
            },
        ],
    });

    // Print functionality
    const printResume = () => {
        window.print();
    };
</script>

<style>
    /* Print-specific styles */
    @media print {
        body {
            font-size: 12pt;
            line-height: 1.4;
        }

        .print\:hidden {
            display: none !important;
        }

        .print\:text-3xl {
            font-size: 1.875rem;
        }

        .print\:text-xl {
            font-size: 1.25rem;
        }

        .print\:text-lg {
            font-size: 1.125rem;
        }

        .print\:mb-6 {
            margin-bottom: 1.5rem;
        }

        .print\:gap-2 {
            gap: 0.5rem;
        }

        .print\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .print\:gap-4 {
            gap: 1rem;
        }

        .print\:px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }

        .print\:py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }

        .print\:p-6 {
            padding: 1.5rem;
        }

        /* Ensure page breaks work well */
        section {
            break-inside: avoid;
        }

        /* Optimize colors for printing */
        .bg-gradient-to-r {
            background: transparent !important;
            border: 1px solid #ccc !important;
        }
    }
</style>
