<script setup lang="ts">
    const path = useRoute().path;
    const { data: letter } = await useAsyncData(path, () =>
        queryCollection("coverLetters").path(path).first(),
    );

    if (!letter.value) {
        throw createError({
            statusCode: 404,
            statusMessage: `No cover letter at ${path}`,
        });
    }

    const salutation = letter.value.salutation ?? "Dear Hiring Team,";

    const displayDate = computed(() => formatLetterDate(letter.value?.date));

    useHead({
        title: `Cover Letter — ${letter.value.company} — Ben Everly`,
        meta: [
            {
                name: "description",
                content: `Ben Everly — Cover letter for ${letter.value.company}`,
            },
        ],
    });
</script>

<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8 print:p-2">
            <DocumentHeader
                subtitle="Full-stack Engineer & Technical Lead"
                header-class="mb-12 text-center print:mb-4"
            />

            <section class="mb-8 print:mb-4">
                <p
                    v-if="displayDate"
                    class="mb-6 text-gray-700 print:mb-4 print:text-sm print:text-black"
                >
                    {{ displayDate }}
                </p>

                <p
                    class="mb-6 text-gray-700 print:mb-4 print:text-sm print:text-black"
                >
                    {{ salutation }}
                </p>

                <ContentRenderer
                    :value="letter"
                    class="cover-letter-body leading-relaxed text-gray-700 print:text-sm print:text-black"
                />

                <p class="mt-8 text-gray-700 print:text-sm print:text-black">
                    Sincerely,<br /><br />
                    <strong>Ben Everly</strong>
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
    /* Match the prior letter look: simple spaced paragraphs, no article prose. */
    .cover-letter-body :deep(p) {
        margin-bottom: 1rem;
    }
</style>
