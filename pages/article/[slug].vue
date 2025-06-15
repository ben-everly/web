<script setup lang="ts">
    const path = useRoute().path as string;
    const { data: article } = await useAsyncData(path, () =>
        queryCollection("articles").path(path).first(),
    );
</script>
<template>
    <NuxtLink to="/" class="flex">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mb-4 h-6 w-6"
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
    <dl class="flex gap-2">
        <dt v-if="article.published_at">Date:</dt>
        <dd v-if="article.published_at">
            <NuxtTime
                :datetime="article.published_at"
                year="numeric"
                month="long"
                day="numeric"
            />
        </dd>
    </dl>
    <ContentRenderer v-if="article" :value="article" />
    <div v-else>Article not found</div>
</template>
