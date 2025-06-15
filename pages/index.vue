<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header class="px-1 py-8 md:px-4">
        <div class="container mx-auto text-center">
            <h1 class="mb-2 font-[Montserrat] text-4xl font-bold">
                Ben Everly
            </h1>
            <NuxtLink to="https://github.com/ben-everly">
                <Icon name="uil:github" class="mr-2 bg-black text-xl" />
            </NuxtLink>
        </div>
    </header>
    <section
        class="bg-primary-700 px-1 py-10 text-neutral-100 shadow-inner shadow-neutral-600/50 md:px-4"
    >
        <div class="container mx-auto text-center">
            <h2 class="mb-4 font-[Montserrat] text-3xl font-semibold">
                About Me
            </h2>
            <p class="text-lg leading-8">
                Hi, I'm Ben. Welcome to my personal website! I'm a software
                engineer currently working at
                <NuxtLink
                    class="text-secondary-600 hover:text-secondary-500"
                    to="https://oberd.com"
                    >OBERD</NuxtLink
                >, where we develop innovative medical software focused on
                patient-reported outcomes data. This site is my space to share
                my projects and professional journey. Whether you're here to
                explore my work, learn more about me, or connect, you've come to
                the right place. I hope you’ll discover something you find
                interesting.
            </p>
        </div>
    </section>
    <section class="px-1 py-18 md:px-4">
        <div class="container mx-auto px-2 text-center">
            <h2 class="font-[Montserrat] text-3xl font-semibold">
                Explorations
            </h2>
            <p class="text-lg leading-8">
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="grid list-none grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="mx-auto h-60 w-80 overflow-hidden rounded-lg shadow-lg duration-300 hover:scale-103 hover:shadow-xl"
                >
                    <NuxtLink
                        :to="`${article.path}`"
                        class="relative block h-full"
                    >
                        <img
                            class="h-full w-full bg-neutral-400 object-cover"
                            alt="Placeholder image"
                        />
                        <div
                            class="bg-opacity-80 absolute bottom-0 w-full bg-neutral-50 p-2"
                        >
                            <h3 class="text-xl font-medium">
                                {{ article.title }}
                            </h3>
                        </div>
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </section>
    <footer
        class="bg-primary-700 px-1 pt-8 pb-4 text-neutral-100 shadow-inner shadow-neutral-600/50 md:px-4"
    >
        <div class="container mx-auto text-center">
            <h2 class="mb-4 font-[Montserrat] text-3xl font-semibold">
                Connect with Me
            </h2>
            <p class="mb-6 text-lg leading-8">
                I'm always open to connecting with fellow developers, tech
                enthusiasts, or anyone interested in my work. Feel free to reach
                out through my
                <NuxtLink
                    to="https://github.com/ben-everly"
                    class="text-secondary-600 hover:text-secondary-500 text-lg"
                    >GitHub</NuxtLink
                >.
            </p>
        </div>
    </footer>
</template>
