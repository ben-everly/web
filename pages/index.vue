<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="from-primary-600 via-primary-700 to-primary-800 animated-gradient relative overflow-hidden bg-gradient-to-br px-1 py-24 text-white md:px-4 md:py-32"
    >
        <div class="grid-pattern absolute inset-0"></div>
        <div class="relative z-10 container mx-auto text-center">
            <h1
                class="mb-8 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
                Ben Everly
            </h1>
            <p
                class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-white/90 md:text-2xl"
            >
                Software Engineer & Problem Solver
            </p>
            <NuxtLink
                to="https://github.com/ben-everly"
                class="hover:shadow-[0_0_20px_theme(colors.secondary.400)] inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
                <Icon name="uil:github" class="size-6" />
                <span>ben-everly</span>
            </NuxtLink>
        </div>
    </header>

    <section class="px-1 py-16 md:px-4 md:py-24">
        <div class="container mx-auto max-w-4xl text-center">
            <h2
                class="mb-8 text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl lg:text-5xl"
            >
                About Me
            </h2>
            <p
                class="text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl"
            >
                Hi, I'm Ben. Welcome to my personal website! I'm a software
                engineer currently working at
                <NuxtLink
                    class="text-secondary-600 hover:text-secondary-500 font-semibold transition-colors duration-200"
                    to="https://oberd.com"
                    >OBERD</NuxtLink
                >, where we develop innovative medical software focused on
                patient-reported outcomes data. This site is my space to share
                my projects and professional journey. Whether you're here to
                explore my work, learn more about me, or connect, you've come to
                the right place. I hope you'll discover something you find
                interesting.
            </p>
        </div>
    </section>

    <section
        class="bg-gradient-to-r from-neutral-50 to-neutral-100 px-1 py-16 md:px-4 md:py-24"
    >
        <div class="container mx-auto px-2 text-center">
            <h2
                class="mb-6 text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl lg:text-5xl"
            >
                Explorations
            </h2>
            <p
                class="mb-12 text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl"
            >
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="grid list-none grid-cols-1 gap-10 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="group mx-auto h-80 w-80 overflow-hidden rounded-2xl bg-neutral-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <NuxtLink
                        :to="`${article.path}`"
                        class="relative block h-full w-full"
                    >
                        <NuxtImg
                            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            :src="article.image"
                            :alt="article.title"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        ></div>
                        <div class="absolute bottom-0 p-6">
                            <h3
                                class="text-2xl leading-tight font-bold text-white drop-shadow-md"
                            >
                                {{ article.title }}
                            </h3>
                        </div>
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </section>

    <footer class="bg-primary-800 px-4 py-8 text-neutral-400">
        <div
            class="container mx-auto flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
            <div class="flex items-center gap-x-6">
                <NuxtLink
                    to="https://github.com/ben-everly"
                    aria-label="GitHub Profile"
                    class="hover:text-secondary-400 transition-colors"
                >
                    <Icon name="uil:github" class="size-6" />
                </NuxtLink>
                <NuxtLink
                    to="https://www.linkedin.com/in/ben-everly-950552101"
                    aria-label="LinkedIn Profile"
                    class="hover:text-secondary-400 transition-colors"
                >
                    <Icon name="uil:linkedin" class="size-6" />
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
