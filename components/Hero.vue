<template>
    <header
        class="from-primary-800 to-primary-900 relative animate-[gradient-animation_15s_ease_infinite] overflow-hidden bg-gradient-to-br bg-size-[200%_200%] px-4 py-16 text-white md:px-8 md:py-20"
    >
        <div class="grid-pattern absolute inset-0 opacity-[3%]"></div>
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
