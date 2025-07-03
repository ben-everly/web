<script setup lang="ts">
    const path = useRoute().path as string;
    const { data: article } = await useAsyncData(path, () =>
        queryCollection("articles").path(path).first(),
    );

    // Fetch recent articles for the not found state
    const { data: recentArticles } = await useAsyncData("recent-articles", () =>
        queryCollection("articles").limit(3).all(),
    );
</script>
<template>
    <header
        class="from-primary-600 via-primary-700 to-primary-800 animated-gradient relative overflow-hidden bg-gradient-to-br px-4 py-16 text-white md:px-8 md:py-20"
    >
        <div class="grid-pattern absolute inset-0 opacity-20"></div>
        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"
        ></div>

        <div class="relative z-10 container mx-auto">
            <div class="animate-fade-in-up">
                <!-- Article Found State -->
                <template v-if="article">
                    <!-- Navigation -->
                    <div class="mb-8">
                        <NuxtLink
                            to="/"
                            class="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <Icon
                                name="uil:arrow-left"
                                class="size-5 transition-transform duration-300 group-hover:-translate-x-1"
                            />
                            <span>Back to Home</span>
                        </NuxtLink>
                    </div>
                    <!-- Author -->
                    <div class="mb-4">
                        <div
                            class="bg-secondary-100 text-secondary-800 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                        >
                            <Icon name="uil:user" class="size-4" />
                            <span>Ben Everly</span>
                        </div>
                    </div>

                    <!-- Article Title -->
                    <h1
                        class="mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
                    >
                        {{ article.title }}
                    </h1>

                    <!-- Article Description -->
                    <p
                        v-if="article.description"
                        class="mb-6 max-w-4xl text-xl leading-relaxed font-light text-white/90 md:text-2xl"
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

                    <!-- Decorative line -->
                    <div
                        class="from-secondary-400 to-secondary-600 mt-8 h-1 w-24 rounded-full bg-gradient-to-r"
                    ></div>
                </template>

                <!-- Article Not Found State -->
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
                            class="mx-auto mb-6 max-w-2xl text-lg leading-relaxed font-light text-white/80"
                        >
                            The article you're looking for doesn't exist or may
                            have been moved.
                        </p>

                        <!-- Decorative line -->
                        <div
                            class="from-secondary-400 to-secondary-600 m-auto mt-8 mb-8 h-1 w-24 rounded-full bg-gradient-to-r"
                        ></div>

                        <!-- Navigation -->
                        <div class="mb-8">
                            <NuxtLink
                                to="/"
                                class="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-lg font-medium backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                <Icon
                                    name="uil:arrow-left"
                                    class="size-5 transition-transform duration-300 group-hover:-translate-x-1"
                                />
                                <span>Back to Home</span>
                            </NuxtLink>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </header>

    <!-- Article Content -->
    <section class="relative py-20 md:py-32">
        <div class="relative z-10 container mx-auto px-4 md:px-8">
            <div v-if="article" class="relative p-8 md:p-12">
                <ContentRenderer
                    :value="article"
                    class="prose prose-lg prose-neutral prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:leading-relaxed prose-p:text-neutral-700 prose-a:text-secondary-600 hover:prose-a:text-secondary-500 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-code:font-medium prose-code:text-neutral-800 prose-blockquote:border-l-4 prose-blockquote:border-secondary-500 prose-blockquote:bg-secondary-50 prose-blockquote:pl-6 prose-blockquote:italic prose-img:rounded-xl prose-img:shadow-lg max-w-none"
                />
                <div
                    class="from-secondary-400/20 to-primary-400/20 absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-30 blur-xl"
                ></div>
            </div>
            <!-- Alternative Content for Not Found State -->
            <div v-else class="mx-auto max-w-6xl space-y-16">
                <!-- Recent Articles Section -->
                <div
                    v-if="recentArticles && recentArticles.length > 0"
                    class="text-center"
                >
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

                    <div
                        class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <article
                            v-for="recentArticle in recentArticles"
                            :key="recentArticle.path"
                            class="group hover:shadow-primary-500/10 relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <NuxtLink :to="recentArticle.path" class="block">
                                <div
                                    class="relative aspect-[4/3] overflow-hidden"
                                >
                                    <NuxtImg
                                        v-if="recentArticle.image"
                                        class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                                        :src="recentArticle.image"
                                        :alt="recentArticle.title"
                                    />
                                    <div
                                        v-else
                                        class="from-primary-500 to-primary-600 flex h-full w-full items-center justify-center bg-gradient-to-br"
                                    >
                                        <Icon
                                            name="uil:document-layout-left"
                                            class="size-12 text-white/80"
                                        />
                                    </div>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                                    ></div>
                                    <div
                                        class="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30"
                                    >
                                        <Icon
                                            name="uil:external-link-alt"
                                            class="size-4 text-white"
                                        />
                                    </div>
                                </div>

                                <div class="p-6">
                                    <h3
                                        class="group-hover:text-primary-500 mb-3 text-xl font-bold text-neutral-900 transition-colors duration-300"
                                    >
                                        {{ recentArticle.title }}
                                    </h3>
                                    <p
                                        v-if="recentArticle.description"
                                        class="line-clamp-3 text-sm leading-relaxed text-neutral-600"
                                    >
                                        {{ recentArticle.description }}
                                    </p>
                                    <div
                                        class="text-primary-500 mt-4 flex items-center gap-2 text-sm font-medium"
                                    >
                                        <span>Read article</span>
                                        <Icon
                                            name="uil:arrow-right"
                                            class="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </div>
                                </div>

                                <div
                                    class="group-hover:border-primary-200 absolute inset-0 rounded-2xl border border-neutral-200/50 transition-all duration-300"
                                ></div>
                            </NuxtLink>
                        </article>
                    </div>
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
                    <div
                        class="relative rounded-2xl border border-neutral-100 bg-white p-8 shadow-xl md:p-12"
                    >
                        <div class="space-y-6">
                            <p
                                class="text-xl leading-relaxed font-light text-neutral-700"
                            >
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
                            <p class="text-lg leading-relaxed text-neutral-600">
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
                                    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                                >
                                    <Icon name="uil:github" class="size-4" />
                                    <span>View GitHub</span>
                                </NuxtLink>
                            </div>
                        </div>
                        <div
                            class="from-secondary-400/20 to-primary-400/20 absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-30 blur-xl"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer
        class="relative bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-4 py-16 md:py-20"
    >
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        ></div>
        <div class="relative z-10 container mx-auto max-w-6xl">
            <div class="text-center">
                <div class="mb-8">
                    <h3 class="mb-4 text-2xl font-bold text-white">
                        Let's Connect
                    </h3>
                    <p class="mx-auto max-w-2xl text-neutral-400">
                        I'm always interested in discussing new opportunities,
                        innovative projects, and connecting with fellow
                        developers.
                    </p>
                </div>

                <div class="mb-8 flex items-center justify-center gap-6">
                    <NuxtLink
                        to="https://github.com/ben-everly"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        class="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20"
                    >
                        <Icon
                            name="uil:github"
                            class="size-5 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span class="font-medium">GitHub</span>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.linkedin.com/in/ben-everly-950552101"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        class="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20"
                    >
                        <Icon
                            name="uil:linkedin"
                            class="size-5 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span class="font-medium">LinkedIn</span>
                    </NuxtLink>
                </div>

                <div class="border-t border-white/10 pt-8">
                    <p class="text-sm text-neutral-500">
                        © {{ new Date().getFullYear() }} Ben Everly. Built with
                        <NuxtLink
                            to="https://nuxt.com"
                            target="_blank"
                            class="text-secondary-400 hover:text-secondary-300 transition-colors"
                            >Nuxt</NuxtLink
                        >
                        &
                        <NuxtLink
                            to="https://tailwindcss.com"
                            target="_blank"
                            class="text-secondary-400 hover:text-secondary-300 transition-colors"
                            >Tailwind CSS</NuxtLink
                        >
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
