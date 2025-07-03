<template>
    <footer
        class="relative bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-4 py-16 md:py-20"
    >
        <div class="grid-pattern absolute inset-0 opacity-[3%]"></div>
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
