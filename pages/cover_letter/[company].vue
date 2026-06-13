<script setup lang="ts">
    const route = useRoute();
    const company = route.params.company as string;

    // Eagerly load all letter sources as raw strings (dev only — these routes
    // are stripped from the production build).
    const files = import.meta.glob("~/cover_letters/*.md", {
        query: "?raw",
        import: "default",
        eager: true,
    }) as Record<string, string>;

    const entry = Object.entries(files).find(
        ([path]) => coverLetterSlug(path) === company,
    );

    if (!entry) {
        throw createError({
            statusCode: 404,
            statusMessage: `No cover letter for "${company}"`,
        });
    }

    const raw = entry[1];

    const { data, body } = parseCoverLetter(raw);
    const companyName = data.company ?? company;
    const salutation = data.salutation ?? "Dear Hiring Team,";

    const displayDate = computed(() => {
        if (!data.date) return "";
        const d = new Date(`${data.date}T00:00:00`);
        if (isNaN(d.getTime())) return data.date;
        return new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(d);
    });

    useHead({
        title: `Cover Letter — ${companyName} — Ben Everly`,
        meta: [
            {
                name: "description",
                content: `Ben Everly — Cover letter for ${companyName}`,
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

                <MDC
                    :value="body"
                    class="cover-letter-body space-y-4 leading-relaxed text-gray-700 print:text-sm print:text-black"
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
