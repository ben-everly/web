<script setup lang="ts">
    interface Props {
        name: string;
        color?:
            | "blue"
            | "red"
            | "purple"
            | "emerald"
            | "cyan"
            | "orange"
            | "sky"
            | "yellow"
            | "green"
            | "gray";
    }

    const props = withDefaults(defineProps<Props>(), {
        color: "blue",
    });

    const colorClasses = computed(() => {
        const colorMap = {
            blue: "border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800",
            red: "border-red-200 bg-gradient-to-r from-red-50 to-red-100 text-red-800",
            purple: "border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800",
            emerald:
                "border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800",
            cyan: "border-cyan-200 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-800",
            orange: "border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800",
            sky: "border-sky-200 bg-gradient-to-r from-sky-50 to-sky-100 text-sky-800",
            yellow: "border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-800",
            green: "border-green-200 bg-gradient-to-r from-green-50 to-green-100 text-green-800",
            gray: "border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800",
        };

        return colorMap[props.color];
    });
</script>

<template>
    <span
        :class="[
            'inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium shadow-sm transition-all duration-200',
            colorClasses,
        ]"
    >
        {{ name }}
    </span>
</template>
