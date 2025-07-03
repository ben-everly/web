<template>
    <NuxtLink
        :to="to"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        class="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 text-lg font-medium backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    >
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
    interface Props {
        to: string
        external?: boolean
    }

    withDefaults(defineProps<Props>(), {
        external: false
    })
</script>
