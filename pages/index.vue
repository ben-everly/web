<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <h1>Ben Everly</h1>
    <NuxtLink
        to="https://github.com/ben-everly"
        class="inline-flex items-center"
    >
        <Icon name="uil:github" class="bg-black size-5" />ben-everly
    </NuxtLink>
    <h2>About Me</h2>
    <p>
        Hi, I'm Ben. Welcome to my personal website! I'm a software engineer
        currently working at OBERD, where we develop innovative medical software
        focused on patient-reported outcomes data. This site is my space to
        share my projects and professional journey. Whether you're here to
        explore my work, learn more about me, or connect, you've come to the
        right place. I hope you’ll discover something you find interesting.
    </p>
    <h2>Projects</h2>
    <p>Here are some of the work I've found interesting recently.</p>
    <ol class="list-none flex gap-8">
        <li v-for="article in articles" :key="article.path">
            <NuxtLink :to="`${article.path}`" class="block w-70">
                <img class="bg-slate-200 w-full h-50" alt="Placeholder image" />
                {{ article.title }}
            </NuxtLink>
        </li>
    </ol>
    <h2>Connect with Me</h2>
    <p>
        I'm always open to connecting with fellow developers, tech enthusiasts,
        or anyone interested in my work. Feel free to reach out through my
        GitHub or connect with me on LinkedIn.
    </p>
</template>
