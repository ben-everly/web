<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header class="py-8">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-2 font-[Montserrat]">
                Ben Everly
            </h1>
            <NuxtLink to="https://github.com/ben-everly">
                <Icon name="uil:github" class="bg-black text-xl mr-2" />
            </NuxtLink>
        </div>
    </header>
    <section class="bg-primary-700 py-10 text-neutral-100">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4 font-[Montserrat]">
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
    <section class="py-18">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold font-[Montserrat]">
                Explorations
            </h2>
            <p class="text-lg leading-8">
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="list-none grid grid-cols-1 md:grid-cols-2 py-6 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="shadow-lg rounded-lg overflow-hidden duration-300 hover:scale-103 hover:shadow-xl w-80 h-60 mx-auto"
                >
                    <NuxtLink :to="`${article.path}`" class="block relative h-full">
                        <img
                            class="bg-neutral-400 w-full h-full object-cover"
                            alt="Placeholder image"
                        />
                        <div
                            class="absolute bottom-0 w-full bg-neutral-50 bg-opacity-80 p-2"
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
    <footer class="pt-8 pb-4 bg-primary-700 text-neutral-100">
        <div class="container mx-auto text-center">
            <h2 class="mb-4 text-3xl font-semibold font-[Montserrat]">
                Connect with Me
            </h2>
            <p class="text-lg leading-8 mb-6">
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
