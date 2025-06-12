<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <div class="flex flex-col items-center">
        <h1>Ben Everly</h1>
        <NuxtLink
            to="https://github.com/ben-everly"
            class="inline-flex items-center"
        >
            <Icon name="uil:github" class="bg-black size-5" />ben-everly
        </NuxtLink>
        <p>
            Hi, I'm Ben. This is my website. I'm a software engineer with a
            passion for building scalable web applications.
        </p>
        <ol class="list-none">
            <li v-for="article in articles" :key="article.path">
                <NuxtLink :to="`${article.path}`">
                    {{ article.title }}
                </NuxtLink>
            </li>
        </ol>
    </div>
</template>
