<script setup lang="ts">
    const path = useRoute().path as string;
    const { data: article } = await useAsyncData(path, () =>
        queryCollection("articles").path(path).first(),
    );
</script>

<template>
    <Hero>
        <template v-if="article">
            <!-- Navigation -->
            <div class="mb-8">
                <HeaderButton to="/">
                    <div class="flex items-center gap-3 px-6 py-3">
                        <Icon
                            name="uil:arrow-left"
                            class="size-5 transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span>Back to Home</span>
                    </div>
                </HeaderButton>
            </div>

            <!-- Article Title -->
            <h1
                class="mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
            >
                {{ article.title }}
            </h1>

            <!-- Author -->
            <div class="mb-4">
                <div
                    class="bg-secondary-100 text-secondary-800 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                    <Icon name="uil:user" class="size-4" />
                    <span>Ben Everly</span>
                </div>
            </div>

            <!-- Article Description -->
            <p
                v-if="article.description"
                class="mb-6 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl"
            >
                {{ article.description }}
            </p>

            <!-- Published Date -->
            <div
                v-if="article.published_at"
                class="flex items-center gap-2 text-white/80"
            >
                <Icon name="uil:calendar-alt" class="size-5" />
                <NuxtTime
                    :datetime="article.published_at"
                    year="numeric"
                    month="long"
                    day="numeric"
                    class="text-lg"
                />
            </div>

            <Divider class="mt-8" />
        </template>

        <template v-else>
            <div class="text-center">
                <div class="mb-6">
                    <Icon
                        name="uil:exclamation-triangle"
                        class="mx-auto mb-4 size-16 text-white/70"
                    />
                </div>

                <h1
                    class="mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-3xl leading-tight font-bold tracking-tight text-transparent md:text-4xl"
                >
                    Article Not Found
                </h1>

                <p
                    class="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/80"
                >
                    The article you're looking for doesn't exist or may have
                    been moved.
                </p>

                <Divider class="m-auto mt-8 mb-8" />

                <!-- Navigation -->
                <div class="mb-8">
                    <HeaderButton to="/">
                        <div class="flex items-center gap-3 px-6 py-3">
                            <Icon
                                name="uil:arrow-left"
                                class="size-5 transition-transform duration-300 group-hover:-translate-x-1"
                            />
                            <span>Back to Home</span>
                        </div>
                    </HeaderButton>
                </div>
            </div>
        </template>
    </Hero>

    <section class="relative py-20 md:py-32">
        <div class="relative z-10 container mx-auto px-4 md:px-8">
            <!-- Article Content -->
            <div v-if="article" class="relative p-8 md:p-12">
                <ContentRenderer
                    :value="article"
                    class="prose-custom max-w-none"
                />
            </div>

            <!-- Recent Articles Section -->
            <div v-else class="mx-auto mb-16 max-w-6xl space-y-16">
                <div class="text-center">
                    <div class="mb-12">
                        <div
                            class="bg-primary-100 text-primary-800 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                        >
                            <Icon name="uil:newspaper" class="size-4" />
                            <span>Recent Articles</span>
                        </div>
                        <h2
                            class="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
                        >
                            <span
                                class="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
                            >
                                Explore Other
                            </span>
                            <span
                                class="from-primary-500 to-primary-600 bg-gradient-to-r bg-clip-text text-transparent"
                            >
                                Content
                            </span>
                        </h2>
                        <p
                            class="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600"
                        >
                            While you're here, check out some of my latest
                            articles and projects.
                        </p>
                    </div>

                    <ArticleGrid :limit="3" />
                </div>
            </div>

            <!-- About Section -->
            <div class="text-center">
                <div class="mb-12">
                    <div
                        class="bg-secondary-100 text-secondary-800 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    >
                        <Icon name="uil:user" class="size-4" />
                        <span>About Ben</span>
                    </div>
                    <h2
                        class="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
                    >
                        <span
                            class="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
                        >
                            Software Engineer &
                        </span>
                        <span
                            class="from-secondary-500 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent"
                        >
                            Problem Solver
                        </span>
                    </h2>
                </div>

                <div class="mx-auto max-w-4xl">
                    <div class="glow relative rounded-2xl p-8 md:p-12">
                        <div class="space-y-6">
                            <p class="text-xl leading-relaxed">
                                Hi, I'm Ben. I'm a software engineer currently
                                working at
                                <NuxtLink
                                    class="text-secondary-600 hover:text-secondary-500 after:bg-secondary-500 relative font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                                    to="https://oberd.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >OBERD</NuxtLink
                                >, where we develop innovative medical software
                                focused on patient-reported outcomes data.
                            </p>
                            <p class="text-xl leading-relaxed">
                                This site is my space to share projects and
                                insights from my professional journey. Whether
                                you're here to explore my work, learn more about
                                me, or connect, I hope you'll find something
                                interesting.
                            </p>

                            <div
                                class="flex flex-wrap justify-center gap-4 pt-6"
                            >
                                <NuxtLink
                                    to="/"
                                    class="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-full px-6 py-3 text-white transition-colors"
                                >
                                    <Icon name="uil:home" class="size-4" />
                                    <span>Visit Homepage</span>
                                </NuxtLink>
                                <NuxtLink
                                    to="https://github.com/ben-everly"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                                >
                                    <Icon name="uil:github" class="size-4" />
                                    <span>View GitHub</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SiteFooter />
</template>
