<script setup lang="ts">
    interface Props {
        subtitle: string;
        headerClass?: string;
    }

    withDefaults(defineProps<Props>(), {
        headerClass: "mb-8 text-center",
    });

    const phone = useRuntimeConfig().public.phone;
    const phoneHref = phone ? `tel:+1${phone.replace(/\D/g, "")}` : "";
</script>

<template>
    <header :class="headerClass">
        <h1
            class="mb-2 text-4xl font-bold text-gray-900 print:text-black print:text-2xl"
        >
            Ben Everly
        </h1>
        <p class="mb-4 text-xl text-gray-600 print:text-black print:text-lg">
            {{ subtitle }}
        </p>
        <div class="text-sm text-gray-600 print:text-black">
            Saint Charles, MO •
            <a
                href="mailto:ben.g.everly@gmail.com"
                target="_blank"
                class="hover:underline"
            >
                ben.g.everly@gmail.com
            </a>
            <template v-if="phone">
                •
                <a
                    :href="phoneHref"
                    class="hover:underline"
                >
                    {{ phone }}
                </a>
            </template>
        </div>
        <div
            class="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600 print:text-black"
        >
            <a
                href="https://linkedin.com/in/ben-everly"
                target="_blank"
                class="flex align-middle hover:underline"
            >
                <Icon
                    name="uil:linkedin"
                    class="size-5 transition-transform duration-300"
                    mode="svg"
                />
                ben-everly
            </a>
            •
            <a
                href="https://github.com/ben-everly"
                target="_blank"
                class="flex align-middle hover:underline"
            >
                <Icon
                    name="uil:github"
                    class="size-5 transition-transform duration-300"
                    mode="svg"
                />
                ben-everly
            </a>
            •
            <a
                href="https://beneverly.com"
                target="_blank"
                class="flex align-middle hover:underline"
            >
                <Icon
                    name="uil:globe"
                    class="size-5 transition-transform duration-300"
                    mode="svg"
                />
                beneverly.com
            </a>
        </div>
    </header>
</template>
