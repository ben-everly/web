<script setup lang="ts">
    const path = useRoute().path as string;
    const { data: article } = await useAsyncData(path, () =>
        queryCollection("articles").path(path).first(),
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
                    {{ article?.title }}
                </h1>

                <!-- Article Description -->
                <p
                    v-if="article?.description"
                    class="mb-6 max-w-4xl text-xl leading-relaxed font-light text-white/90 md:text-2xl"
                >
                    {{ article.description }}
                </p>

                <!-- Published Date -->
                <div
                    v-if="article?.published_at"
                    class="flex items-center gap-2 text-white/80"
                >
                    <Icon name="uil:calendar-alt" class="size-5" />
                    <NuxtTime
                        :datetime="article?.published_at"
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
            </div>
        </div>
    </header>

    <!-- Article Content -->
    <section class="relative py-20 md:py-32">
        <div
            class="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white"
        ></div>
        <div class="relative z-10 container mx-auto max-w-4xl px-4 md:px-8">
            <div
                v-if="article"
                class="relative rounded-2xl border border-neutral-100 bg-white p-8 shadow-xl md:p-12"
            >
                <ContentRenderer
                    :value="article"
                    class="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:leading-relaxed prose-p:text-neutral-700 prose-a:text-secondary-600 hover:prose-a:text-secondary-500 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-code:font-medium prose-code:text-neutral-800 prose-blockquote:border-l-4 prose-blockquote:border-secondary-500 prose-blockquote:bg-secondary-50 prose-blockquote:pl-6 prose-blockquote:italic prose-img:rounded-xl prose-img:shadow-lg"
                />
                <div
                    class="from-secondary-400/20 to-primary-400/20 absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-30 blur-xl"
                ></div>
            </div>
            <div
                v-else
                class="rounded-2xl border border-neutral-200 bg-white p-12 text-center shadow-lg"
            >
                <Icon
                    name="uil:exclamation-triangle"
                    class="mx-auto mb-4 size-12 text-neutral-400"
                />
                <h2 class="mb-2 text-2xl font-bold text-neutral-900">
                    Article Not Found
                </h2>
                <p class="text-lg text-neutral-600">
                    The article you're looking for doesn't exist.
                </p>
                <NuxtLink
                    to="/"
                    class="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
                >
                    <Icon name="uil:arrow-left" class="size-4" />
                    <span>Back to Home</span>
                </NuxtLink>
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
