import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: "page",
            // Exclude cover_letter so those files never join the articles
            // collection (different schema, different purpose).
            source: { include: "**", exclude: ["cover_letter/**"] },
            schema: z.object({
                published_at: z.string(),
                image: z.string(),
                description: z.string().optional(),
            }),
        }),
        coverLetters: defineCollection({
            type: "page",
            // In production the source matches nothing, so cover letters are
            // never compiled into the shipped content DB. Combined with the
            // gitignored content/cover_letter/ dir (absent in CI) and the
            // route-strip hook in nuxt.config.ts, the letters never reach prod.
            source:
                process.env.NODE_ENV === "production"
                    ? { include: "cover_letter/**", exclude: ["**"] }
                    : "cover_letter/**",
            schema: z.object({
                company: z.string(),
                date: z.string(),
                salutation: z.string().optional(),
            }),
        }),
    },
});
