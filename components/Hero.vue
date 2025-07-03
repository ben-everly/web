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
                <slot />
            </div>
        </div>
    </header>
</template>

