<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8 print:p-2">
            <header class="mb-12 text-center print:mb-4">
                <h1
                    class="mb-2 text-4xl font-bold text-gray-900 print:mb-1 print:text-2xl print:text-black"
                >
                    Ben Everly
                </h1>
                <p
                    class="mb-4 text-xl text-gray-600 print:mb-2 print:text-lg print:text-black"
                >
                    Full-stack Engineer & Technical Lead
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
                    class="mt-1 flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600 print:text-black"
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

            <section class="mb-8 print:mb-4">
                <p class="mb-6 text-gray-700 print:text-sm print:text-black print:mb-4">
                    {{ currentDate }}
                </p>

                <p class="mb-6 text-gray-700 print:text-sm print:text-black print:mb-4">
                    Dear Hiring Team,
                </p>

                <div
                    class="space-y-4 leading-relaxed text-gray-700 print:text-sm print:text-black"
                >
                    <p>
                    </p>

                </div>

                <p class="mt-8 text-gray-700 print:text-sm print:text-black">
                    Sincerely,<br /><br />
                    <strong>Ben Everly</strong>
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const phone = useRuntimeConfig().public.phone
const phoneHref = phone ? `tel:+1${phone.replace(/\D/g, '')}` : ''

const currentDate = computed(() => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date())
})

useHead({
    title: 'Cover Letter - Ben Everly',
    meta: [
        {
            name: 'description',
            content: 'Ben Everly - Software Engineer Cover Letter',
        },
    ],
})
</script>
