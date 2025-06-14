<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 py-4"
    >
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-2 font-[Montserrat]">
                Ben Everly
            </h1>
            <NuxtLink to="https://github.com/ben-everly">
                <Icon name="uil:github" class="bg-black text-xl mr-2" />
            </NuxtLink>
        </div>
    </header>
    <section class="bg-primary-700 py-10 text-neutral-50">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4 font-[Montserrat]">
                About Me
            </h2>
            <p class="text-lg leading-8">
                Hi, I'm Ben. Welcome to my personal website! I'm a software
                engineer currently working at
                <NuxtLink
                    class="text-secondary-300 hover:text-secondary-500"
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
    <section class="py-10">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4 font-[Montserrat]">
                Projects
            </h2>
            <p class="text-lg leading-8 text-secondary-900 mb-6">
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="shadow-lg rounded-lg overflow-hidden duration-300 hover:scale-102 hover:shadow-xl"
                >
                    <NuxtLink :to="`${article.path}`" class="block">
                        <img
                            class="bg-neutral-400 w-full h-40 object-cover"
                            alt="Placeholder image"
                        />
                        <div class="p-4">
                            <h3 class="text-xl font-medium">
                                {{ article.title }}
                            </h3>
                        </div>
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </section>
    <footer class="pt-10 pb-4 border-t-10 border-primary-700">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4 font-[Montserrat]">
                Connect with Me
            </h2>
            <p class="text-lg leading-8 mb-6">
                I'm always open to connecting with fellow developers, tech
                enthusiasts, or anyone interested in my work. Feel free to reach
                out through my GitHub or connect with me on LinkedIn.
            </p>
            <div class="flex justify-center gap-4">
                <NuxtLink
                    to="https://github.com/ben-everly"
                    class="text-secondary-600 hover:text-secondary-800 text-lg"
                >
                    GitHub
                </NuxtLink>
                <NuxtLink
                    to="https://linkedin.com/in/ben-everly"
                    class="text-secondary-600 hover:text-secondary-800 text-lg"
                >
                    LinkedIn
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
