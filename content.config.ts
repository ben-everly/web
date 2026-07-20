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
            // Cover letters are private: included only in dev; every other env
            // gets a no-match source. Also stripped in nuxt.config.ts.
            source:
                process.env.NODE_ENV === "development"
                    ? "cover_letter/**"
                    : { include: "cover_letter/**", exclude: ["**"] },
            schema: z.object({
                company: z.string(),
                date: z.string(),
                salutation: z.string().optional(),
            }),
        }),
    },
});
