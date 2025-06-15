<script setup lang="ts">
    const path = useRoute().path as string;
    const { data: article } = await useAsyncData(path, () =>
        queryCollection("articles").path(path).first(),
    );
</script>
<template>
    <header class="bg-primary-700 px-4 py-6 text-neutral-100 md:px-8">
        <div class="container mx-auto flex items-center gap-10">
            <NuxtLink
                to="/"
                class="inline-flex items-center text-lg hover:scale-105"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M12 19l-7-7 7-7" />
                </svg>
                Home
            </NuxtLink>
            <div class="flex flex-col">
                <h1 class="mb-2 text-lg font-medium">Ben Everly</h1>
                <h1 class="mb-2 text-3xl font-semibold">{{ article.title }}</h1>
                <p v-if="article.published_at" class="text-md">
                    <NuxtTime
                        :datetime="article.published_at"
                        year="numeric"
                        month="long"
                        day="numeric"
                    />
                </p>
            </div>
        </div>
    </header>
    <section class="flex px-1 py-12 md:px-4">
        <div class="container mx-auto px-2">
            <ContentRenderer v-if="article" :value="article" class="prose" />
            <div v-else class="text-lg">Article not found</div>
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
