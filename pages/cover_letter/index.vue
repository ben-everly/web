<script setup lang="ts">
    const { data: letters } = await useAsyncData("cover-letters", () =>
        queryCollection("coverLetters").order("date", "DESC").all(),
    );

    useHead({ title: "Cover Letters — Ben Everly" });
</script>

<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8">
            <h1 class="mb-6 text-3xl font-bold text-gray-900">Cover Letters</h1>
            <ul class="space-y-2">
                <li
                    v-for="letter in letters"
                    :key="letter.path"
                >
                    <NuxtLink
                        :to="letter.path"
                        class="text-blue-700 hover:underline"
                    >
                        {{ letter.company }}
                    </NuxtLink>
                    <span
                        v-if="letter.date"
                        class="text-sm text-gray-500"
                    >
                        — {{ formatLetterDate(letter.date) }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
