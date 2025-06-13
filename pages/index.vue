<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 py-6 mb-8"
    >
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-2">Ben Everly</h1>
            <NuxtLink
                to="https://github.com/ben-everly"
                class="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
                <Icon name="uil:github" class="bg-black text-xl mr-2" />
            </NuxtLink>
        </div>
    </header>
    <section class="bg-white py-10">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">About Me</h2>
            <p class="text-lg leading-8 text-slate-700">
                Hi, I'm Ben. Welcome to my personal website! I'm a software
                engineer currently working at
                <NuxtLink class="text-blue-500" to="https://oberd.com"
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
    <section class="bg-slate-50 py-10">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">Projects</h2>
            <p class="text-lg leading-8 text-slate-700 mb-6">
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="shadow-lg rounded-lg overflow-hidden"
                >
                    <NuxtLink :to="`${article.path}`" class="block">
                        <img
                            class="bg-slate-200 w-full h-40 object-cover"
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
    <section class="bg-white py-10">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold mb-4">Connect with Me</h2>
            <p class="text-lg leading-8 text-slate-700 mb-6">
                I'm always open to connecting with fellow developers, tech
                enthusiasts, or anyone interested in my work. Feel free to reach
                out through my GitHub or connect with me on LinkedIn.
            </p>
            <div class="flex justify-center gap-4">
                <NuxtLink
                    to="https://github.com/ben-everly"
                    class="text-blue-500 hover:text-blue-700 text-lg"
                >
                    GitHub
                </NuxtLink>
                <NuxtLink
                    to="https://linkedin.com/in/ben-everly"
                    class="text-blue-500 hover:text-blue-700 text-lg"
                >
                    LinkedIn
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
