<script setup lang="ts">
    const files = import.meta.glob("~/cover_letters/*.md", {
        query: "?raw",
        import: "default",
        eager: true,
    }) as Record<string, string>;

    function frontmatter(src: string): Record<string, string> {
        const match = src.match(/^---\n([\s\S]*?)\n---/);
        if (!match) return {};
        const data: Record<string, string> = {};
        for (const line of match[1].split("\n")) {
            const idx = line.indexOf(":");
            if (idx === -1) continue;
            data[line.slice(0, idx).trim()] = line
                .slice(idx + 1)
                .trim()
                .replace(/^["']|["']$/g, "");
        }
        return data;
    }

    const letters = Object.entries(files)
        .map(([path, src]) => {
            const slug = path.split("/").pop()!.replace(/\.md$/, "");
            const fm = frontmatter(src);
            return { slug, company: fm.company ?? slug, date: fm.date ?? "" };
        })
        .sort((a, b) => b.date.localeCompare(a.date));

    useHead({ title: "Cover Letters — Ben Everly" });
</script>

<template>
    <div class="min-h-screen bg-white">
        <div class="mx-auto max-w-4xl p-8">
            <h1 class="mb-6 text-3xl font-bold text-gray-900">Cover Letters</h1>
            <ul class="space-y-2">
                <li
                    v-for="letter in letters"
                    :key="letter.slug"
                >
                    <NuxtLink
                        :to="`/cover_letter/${letter.slug}`"
                        class="text-blue-700 hover:underline"
                    >
                        {{ letter.company }}
                    </NuxtLink>
                    <span
                        v-if="letter.date"
                        class="text-sm text-gray-500"
                    >
                        — {{ letter.date }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
