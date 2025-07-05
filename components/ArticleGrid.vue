<script setup lang="ts">
    const props = defineProps({
        limit: {
            type: Number,
            required: false,
        },
    });

    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles")
            .limit(props.limit ?? null)
            .all(),
    );
</script>

<template>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="article in articles"
            :key="article.path"
            class="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-neutral-600/10"
        >
            <NuxtLink
                :to="article.path"
                class="block rounded-2xl border border-neutral-200/50"
            >
                <div class="relative aspect-[4/3] overflow-hidden">
                    <NuxtImg
                        v-if="article.image"
                        class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                        :src="article.image"
                        :alt="article.title"
                    />
                    <div
                        v-else
                        class="from-primary-700 to-primary-800 flex h-full w-full items-center justify-center bg-gradient-to-br"
                    >
                        <Icon
                            name="uil:document-layout-left"
                            class="size-12 text-white/80"
                        />
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                    ></div>
                    <Icon
                        name="uil:external-link-alt"
                        class="absolute top-4 right-4 size-5 text-white/20 transition-all duration-300 group-hover:text-white/60"
                    />
                </div>

                <div class="p-6">
                    <h3
                        class="mb-3 text-xl font-bold text-neutral-900 transition-colors duration-300"
                    >
                        {{ article.title }}
                    </h3>
                    <p
                        v-if="article.description"
                        class="line-clamp-3 text-sm leading-relaxed text-neutral-600"
                    >
                        {{ article.description }}
                    </p>
                    <div
                        class="text-primary-700 mt-4 flex items-center gap-2 text-sm font-medium"
                    >
                        <span>Read article</span>
                        <Icon
                            name="uil:arrow-right"
                            class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </NuxtLink>
        </article>
    </div>
</template>
