<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="from-primary-600 via-primary-700 to-primary-800 animated-gradient relative overflow-hidden bg-gradient-to-br px-4 py-32 text-white md:px-8 md:py-40 lg:py-48"
    >
        <div class="grid-pattern absolute inset-0 opacity-20"></div>
        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"
        ></div>

        <div class="relative z-10 container mx-auto text-center">
            <div class="animate-fade-in-up">
                <h1
                    class="mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text pb-2 text-6xl leading-tight font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl xl:text-9xl"
                >
                    Ben Everly
                </h1>
                <div
                    class="from-secondary-400 to-secondary-600 mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r"
                ></div>
                <p
                    class="mx-auto mb-16 max-w-4xl text-xl leading-relaxed font-light text-white/90 md:text-2xl lg:text-3xl"
                >
                    Software Engineer & Problem Solver
                </p>
                <div
                    class="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <NuxtLink
                        to="https://github.com/ben-everly"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <Icon
                            name="uil:github"
                            class="size-6 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span>View GitHub</span>
                        <Icon
                            name="uil:external-link-alt"
                            class="size-4 opacity-70"
                        />
                    </NuxtLink>
                    <NuxtLink
                        to="#about"
                        class="inline-flex items-center gap-2 px-6 py-4 text-white/80 transition-colors duration-300 hover:text-white"
                    >
                        <span>Learn More</span>
                        <Icon
                            name="uil:arrow-down"
                            class="size-4 animate-bounce"
                        />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <section id="about" class="relative py-20 md:py-32">
        <div
            class="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white"
        ></div>
        <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-8">
            <div class="mb-16 text-center">
                <div
                    class="bg-secondary-100 text-secondary-800 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                    <Icon name="uil:user" class="size-4" />
                    <span>About Me</span>
                </div>
                <h2
                    class="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
                >
                    <span
                        class="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
                    >
                        Building Solutions,
                    </span>
                    <br />
                    <span
                        class="from-secondary-600 to-secondary-700 bg-gradient-to-r bg-clip-text text-transparent"
                    >
                        Solving Problems
                    </span>
                </h2>
            </div>

            <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div class="space-y-6">
                    <div class="prose prose-lg prose-neutral max-w-none">
                        <p
                            class="text-xl leading-relaxed font-light text-neutral-700"
                        >
                            Hi, I'm Ben. Welcome to my personal website! I'm a
                            software engineer currently working at
                            <NuxtLink
                                class="text-secondary-600 hover:text-secondary-500 after:bg-secondary-500 relative font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                                to="https://oberd.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >OBERD</NuxtLink
                            >, where we develop innovative medical software
                            focused on patient-reported outcomes data.
                        </p>
                        <p class="text-lg leading-relaxed text-neutral-600">
                            This site is my space to share my projects and
                            professional journey. Whether you're here to explore
                            my work, learn more about me, or connect, you've
                            come to the right place. I hope you'll discover
                            something you find interesting.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="space-y-4">
                            <p class="text-sm font-medium text-neutral-700">
                                Currently working with:
                            </p>
                            <div class="flex flex-wrap gap-3">
                                <TechTag name="PHP" color="blue" />
                                <TechTag name="Laravel" color="red" />
                                <TechTag name="Livewire" color="purple" />
                                <TechTag name="AlpineJS" color="emerald" />
                                <TechTag name="TailwindCSS" color="cyan" />
                                <TechTag name="MySQL" color="orange" />
                                <TechTag name="Docker" color="green" />
                                <TechTag name="AWS" color="yellow" />
                                <TechTag name="Neovim" color="sky" />
                            </div>
                        </div>

                        <div class="space-y-4">
                            <p class="text-sm font-medium text-neutral-700">
                                Currently exploring:
                            </p>
                            <div class="flex flex-wrap gap-3">
                                <TechTag name="ML Engineering" color="purple" />
                                <TechTag name="AI Tools" color="blue" />
                                <TechTag name="Google Cloud" color="yellow" />
                                <TechTag name="WASM" color="emerald" />
                                <TechTag name="Rust" color="orange" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div
                        class="relative z-10 rounded-2xl border border-neutral-100 bg-white p-8 shadow-xl"
                    >
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <Icon
                                    name="uil:briefcase"
                                    class="text-secondary-500 mt-0.5 size-5 flex-shrink-0"
                                />
                                <div>
                                    <p class="font-medium text-neutral-900">
                                        Current Role
                                    </p>
                                    <p class="text-sm text-neutral-600">
                                        Senior Software Engineer
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <Icon
                                    name="uil:building"
                                    class="text-secondary-500 mt-0.5 size-5 flex-shrink-0"
                                />
                                <div>
                                    <p class="font-medium text-neutral-900">
                                        Company
                                    </p>
                                    <p class="text-sm text-neutral-600">
                                        OBERD - Medical Software Development
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <Icon
                                    name="uil:focus-target"
                                    class="text-secondary-500 mt-0.5 size-5 flex-shrink-0"
                                />
                                <div>
                                    <p class="font-medium text-neutral-900">
                                        Focus Area
                                    </p>
                                    <p class="text-sm text-neutral-600">
                                        Patient-Reported Outcomes Data
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="from-secondary-400/20 to-primary-400/20 absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-30 blur-xl"
                    ></div>
                </div>
            </div>
        </div>
    </section>

    <section
        class="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-20 md:py-32"
    >
        <div
            class="absolute inset-0 bg-gradient-to-r from-neutral-50/80 to-neutral-100/80"
        ></div>
        <div class="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
            <div class="mb-16 text-center">
                <div
                    class="bg-primary-100 text-primary-800 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                    <Icon name="uil:lightbulb-alt" class="size-4" />
                    <span>Recent Work</span>
                </div>
                <h2
                    class="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
                >
                    <span
                        class="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
                    >
                        Creative
                    </span>
                    <span
                        class="from-primary-500 to-primary-600 bg-gradient-to-r bg-clip-text text-transparent"
                    >
                        Explorations
                    </span>
                </h2>
                <p
                    class="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl"
                >
                    A collection of projects and experiments that showcase my
                    passion for innovation and problem-solving.
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                <article
                    v-for="article in articles"
                    :key="article.path"
                    class="group hover:shadow-primary-500/10 relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                    <NuxtLink :to="article.path" class="block">
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <NuxtImg
                                class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                                :src="article.image"
                                :alt="article.title"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                            ></div>
                            <div
                                class="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30"
                            >
                                <Icon
                                    name="uil:external-link-alt"
                                    class="size-4 text-white"
                                />
                            </div>
                        </div>

                        <div class="p-6">
                            <h3
                                class="group-hover:text-primary-500 mb-3 text-xl font-bold text-neutral-900 transition-colors duration-300"
                            >
                                {{ article.title }}
                            </h3>
                            <p
                                v-if="article.description"
                                class="line-clamp-3 text-sm leading-relaxed text-neutral-600"
                            >
                                {{ article.description }}
                            </p>
                            <div
                                class="text-primary-500 mt-4 flex items-center gap-2 text-sm font-medium"
                            >
                                <span>Read more</span>
                                <Icon
                                    name="uil:arrow-right"
                                    class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </div>

                        <div
                            class="group-hover:border-primary-200 absolute inset-0 rounded-3xl border border-neutral-200/50 transition-all duration-300"
                        ></div>
                    </NuxtLink>
                </article>
            </div>
        </div>
    </section>

    <footer
        class="relative bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-4 py-16 md:py-20"
    >
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        ></div>
        <div class="relative z-10 container mx-auto max-w-6xl">
            <div class="text-center">
                <div class="mb-8">
                    <h3 class="mb-4 text-2xl font-bold text-white">
                        Let's Connect
                    </h3>
                    <p class="mx-auto max-w-2xl text-neutral-400">
                        I'm always interested in discussing new opportunities,
                        innovative projects, and connecting with fellow
                        developers.
                    </p>
                </div>

                <div class="mb-8 flex items-center justify-center gap-6">
                    <NuxtLink
                        to="https://github.com/ben-everly"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        class="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20"
                    >
                        <Icon
                            name="uil:github"
                            class="size-5 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span class="font-medium">GitHub</span>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.linkedin.com/in/ben-everly-950552101"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        class="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20"
                    >
                        <Icon
                            name="uil:linkedin"
                            class="size-5 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span class="font-medium">LinkedIn</span>
                    </NuxtLink>
                </div>

                <div class="border-t border-white/10 pt-8">
                    <p class="text-sm text-neutral-500">
                        © {{ new Date().getFullYear() }} Ben Everly. Built with
                        <NuxtLink
                            to="https://nuxt.com"
                            target="_blank"
                            class="text-secondary-400 hover:text-secondary-300 transition-colors"
                            >Nuxt</NuxtLink
                        >
                        &
                        <NuxtLink
                            to="https://tailwindcss.com"
                            target="_blank"
                            class="text-secondary-400 hover:text-secondary-300 transition-colors"
                            >Tailwind CSS</NuxtLink
                        >
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
