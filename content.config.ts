import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: "page",
            source: "**",
            schema: z.object({
                published_at: z.string(),
                image: z.string(),
                description: z.string().optional(),
            }),
        }),
    },
});
