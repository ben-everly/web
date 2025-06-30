<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="from-primary-600 via-primary-600 to-primary-800 bg-gradient-to-br px-1 py-20 text-white md:px-4 md:py-28"
    >
        <div class="container mx-auto text-center">
            <h1
                class="mb-6 font-[Montserrat] text-5xl font-bold md:text-6xl lg:text-7xl"
            >
                Ben Everly
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
                Software Engineer & Problem Solver
            </p>
            <NuxtLink
                to="https://github.com/ben-everly"
                class="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
                <Icon name="uil:github" class="size-6" />
                <span>ben-everly</span>
            </NuxtLink>
        </div>
    </header>
    
    <section class="px-1 py-16 bg-neutral-50 md:px-4 md:py-24">
        <div class="container mx-auto max-w-4xl text-center">
            <h2 class="mb-8 font-[Montserrat] text-3xl font-semibold text-neutral-800 md:text-4xl">
                About Me
            </h2>
            <p class="text-lg leading-relaxed text-neutral-700 md:text-xl">
                Hi, I'm Ben. Welcome to my personal website! I'm a software
                engineer currently working at
                <NuxtLink
                    class="text-secondary-600 hover:text-secondary-500 font-medium transition-colors duration-200"
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
    
    <section class="px-1 py-16 md:px-4 md:py-24">
        <div class="container mx-auto px-2 text-center">
            <h2 class="mb-4 font-[Montserrat] text-3xl font-semibold text-neutral-800 md:text-4xl">
                Explorations
            </h2>
            <p class="mb-12 text-lg leading-relaxed text-neutral-700 md:text-xl">
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="grid list-none grid-cols-1 gap-8 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="mx-auto h-64 w-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <NuxtLink
                        :to="`${article.path}`"
                        class="relative block h-full"
                    >
                        <NuxtImg
                            class="h-full w-full bg-neutral-400 object-cover"
                            :src="article.image"
                            :alt="article.title"
                        />
                        <div
                            class="absolute bottom-0 w-full bg-white/95 backdrop-blur-sm p-4"
                        >
                            <h3 class="text-xl font-semibold text-neutral-800">
                                {{ article.title }}
                            </h3>
                        </div>
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </section>
    
    <footer
        class="bg-primary-700 px-1 py-16 text-neutral-100 shadow-inner shadow-neutral-600/50 md:px-4 md:py-20"
    >
        <div class="container mx-auto max-w-4xl text-center">
            <h2 class="mb-6 font-[Montserrat] text-3xl font-semibold md:text-4xl">
                Connect with Me
            </h2>
            <p class="mb-8 text-lg leading-relaxed text-neutral-200 md:text-xl">
                I'm always open to connecting with fellow developers, tech
                enthusiasts, or anyone interested in my work. Feel free to reach
                out through my
                <NuxtLink
                    to="https://github.com/ben-everly"
                    class="text-secondary-400 hover:text-secondary-300 font-medium transition-colors duration-200"
                    >GitHub</NuxtLink
                >.
            </p>
        </div>
    </footer>
</template>
