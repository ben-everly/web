<script setup>
    const { data: articles } = await useAsyncData(() =>
        queryCollection("articles").all(),
    );
</script>
<template>
    <header
        class="from-primary-600 via-primary-700 to-primary-800 animated-gradient relative overflow-hidden bg-gradient-to-br px-4 py-32 text-white md:px-8 md:py-40 lg:py-48"
    >
        <div class="grid-pattern absolute inset-0 opacity-20"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        
        <div class="relative z-10 container mx-auto text-center">
            <div class="animate-fade-in-up">
                <h1
                    class="mb-6 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 md:text-7xl lg:text-8xl xl:text-9xl"
                >
                    Ben Everly
                </h1>
                <div class="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full"></div>
                <p
                    class="mx-auto mb-16 max-w-4xl text-xl leading-relaxed font-light text-white/90 md:text-2xl lg:text-3xl"
                >
                    Software Engineer & Problem Solver
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <NuxtLink
                        to="https://github.com/ben-everly"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <Icon name="uil:github" class="size-6 transition-transform duration-300 group-hover:rotate-12" />
                        <span>View GitHub</span>
                        <Icon name="uil:external-link-alt" class="size-4 opacity-70" />
                    </NuxtLink>
                    <NuxtLink
                        to="#about"
                        class="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 px-6 py-4"
                    >
                        <span>Learn More</span>
                        <Icon name="uil:arrow-down" class="size-4 animate-bounce" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <section id="about" class="relative py-20 md:py-32">
        <div class="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white"></div>
        <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-8">
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium">
                    <Icon name="uil:user" class="size-4" />
                    <span>About Me</span>
                </div>
                <h2 class="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                    <span class="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                        Building Solutions,
                    </span>
                    <br />
                    <span class="bg-gradient-to-r from-secondary-600 to-secondary-700 bg-clip-text text-transparent">
                        Solving Problems
                    </span>
                </h2>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="space-y-6">
                    <div class="prose prose-lg prose-neutral max-w-none">
                        <p class="text-xl leading-relaxed text-neutral-700 font-light">
                            Hi, I'm Ben. Welcome to my personal website! I'm a software engineer currently working at
                            <NuxtLink
                                class="text-secondary-600 hover:text-secondary-500 font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary-500 after:transition-all after:duration-300 hover:after:w-full"
                                to="https://oberd.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >OBERD</NuxtLink>, where we develop innovative medical software focused on patient-reported outcomes data.
                        </p>
                        <p class="text-lg leading-relaxed text-neutral-600">
                            This site is my space to share my projects and professional journey. Whether you're here to explore my work, learn more about me, or connect, you've come to the right place. I hope you'll discover something you find interesting.
                        </p>
                    </div>
                    
                    <div class="flex flex-wrap gap-3">
                        <span class="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">Software Engineering</span>
                        <span class="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">Medical Software</span>
                        <span class="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">Problem Solving</span>
                        <span class="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">Innovation</span>
                    </div>
                </div>
                
                <div class="relative">
                    <div class="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                                <Icon name="uil:briefcase" class="size-6 text-secondary-600" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900">Current Role</h3>
                                <p class="text-neutral-600 text-sm">Software Engineer</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <Icon name="uil:building" class="size-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p class="font-medium text-neutral-900">OBERD</p>
                                    <p class="text-sm text-neutral-600">Medical Software Development</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <Icon name="uil:focus-target" class="size-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p class="font-medium text-neutral-900">Focus Area</p>
                                    <p class="text-sm text-neutral-600">Patient-Reported Outcomes Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -inset-4 bg-gradient-to-r from-secondary-400/20 to-primary-400/20 rounded-3xl blur-xl opacity-30"></div>
                </div>
            </div>
        </div>
    </section>

    <section
        class="bg-gradient-to-r from-neutral-50 to-neutral-100 px-1 py-16 md:px-4 md:py-24"
    >
        <div class="container mx-auto px-2 text-center">
            <h2
                class="mb-6 text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl lg:text-5xl"
            >
                Explorations
            </h2>
            <p
                class="mb-12 text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl"
            >
                Here is some of the work I've found interesting recently.
            </p>
            <ol
                class="grid list-none grid-cols-1 gap-10 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
                <li
                    v-for="article in articles"
                    :key="article.path"
                    class="group mx-auto h-80 w-80 overflow-hidden rounded-2xl bg-neutral-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <NuxtLink
                        :to="`${article.path}`"
                        class="relative block h-full w-full"
                    >
                        <NuxtImg
                            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            :src="article.image"
                            :alt="article.title"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        ></div>
                        <div class="absolute bottom-0 p-6">
                            <h3
                                class="text-2xl leading-tight font-bold text-white drop-shadow-md"
                            >
                                {{ article.title }}
                            </h3>
                        </div>
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </section>

    <footer class="bg-primary-800 px-4 py-8 text-neutral-400">
        <div
            class="container mx-auto flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
            <div class="flex items-center gap-x-6">
                <NuxtLink
                    to="https://github.com/ben-everly"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    class="hover:text-secondary-400 transition-colors"
                >
                    <Icon name="uil:github" class="size-6" />
                </NuxtLink>
                <NuxtLink
                    to="https://www.linkedin.com/in/ben-everly-950552101"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    class="hover:text-secondary-400 transition-colors"
                >
                    <Icon name="uil:linkedin" class="size-6" />
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
