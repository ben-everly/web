<template>
    <Hero>
        <div class="py-16 text-center md:py-20 lg:py-28">
            <div class="flex items-center gap-8">
                <div
                    class="h-px flex-1 bg-gradient-to-r from-transparent to-white/40"
                ></div>
                <h1
                    class="mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text pb-2 text-6xl leading-tight font-bold tracking-tight text-transparent text-shadow-[0_0_40px_rgb(255_255_255_/_0.2)] md:text-7xl lg:text-8xl xl:text-9xl"
                >
                    Ben Everly
                </h1>
                <div
                    class="h-px flex-1 bg-gradient-to-l from-transparent to-white/40"
                ></div>
            </div>
            <Divider class="mx-auto mb-8" />
            <p
                class="mx-auto mb-16 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl"
            >
                Software Engineer & Problem Solver
            </p>
            <div
                class="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
                <HeaderButton
                    to="https://github.com/ben-everly"
                    :external="true"
                >
                    <div class="flex items-center gap-3 px-8 py-4">
                        <Icon
                            name="uil:github"
                            class="size-6 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span>View GitHub</span>
                        <Icon
                            name="uil:external-link-alt"
                            class="size-4 opacity-70"
                        />
                    </div>
                </HeaderButton>
                <NuxtLink
                    to="#about"
                    class="inline-flex items-center gap-2 px-6 py-4 text-white/80 transition-colors duration-300 hover:text-white"
                >
                    <span>Learn More</span>
                    <Icon name="uil:arrow-down" class="size-4 animate-bounce" />
                </NuxtLink>
            </div>
        </div>
    </Hero>

    <section
        id="about"
        class="relative bg-gradient-to-b from-white via-neutral-50/50 to-white py-20 md:py-32"
    >
        <div class="relative container mx-auto max-w-6xl px-4 md:px-8">
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
                    <div class="prose-custom">
                        <p>
                            Hi, I'm Ben. Welcome to my personal website! I'm a
                            software engineer currently working at
                            <NuxtLink
                                to="https://oberd.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >OBERD</NuxtLink
                            >, where we develop innovative medical software
                            focused on patient-reported outcomes data.
                        </p>
                        <p>
                            This site is my space to share my projects and
                            professional journey. Whether you're here to explore
                            my work, learn more about me, or connect, you've
                            come to the right place. I hope you'll discover
                            something you find interesting.
                        </p>
                    </div>
                </div>

                <div class="relative space-y-6">
                    <div class="glow relative rounded-2xl p-8">
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
                    <div class="space-y-6">
                        <div class="space-y-4">
                            <p class="text-sm font-medium">
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
                                <TechTag name="Github" color="gray" />
                                <TechTag name="Neovim" color="sky" />
                            </div>
                        </div>

                        <div class="space-y-4">
                            <p class="text-sm font-medium">
                                Currently exploring:
                            </p>
                            <div class="flex flex-wrap gap-3">
                                <TechTag name="ML Engineering" color="purple" />
                                <TechTag name="AI Tools" color="blue" />
                                <TechTag name="Google Cloud" color="yellow" />
                                <TechTag name="Rust" color="orange" />
                                <TechTag name="WASM" color="emerald" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section
        class="relative border-t border-neutral-200/60 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 py-24 shadow-inner md:py-36"
    >
        <div class="relative container mx-auto max-w-7xl px-4 md:px-8">
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
                        class="from-primary-700 to-primary-800 bg-gradient-to-r bg-clip-text text-transparent"
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

            <ArticleGrid />
        </div>
    </section>

    <SiteFooter />
</template>
