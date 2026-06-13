import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    modules: ["@nuxt/content", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
    hooks: {
        "pages:extend"(pages) {
            // Strip all /cover_letter routes from the production build. Removing the
            // routes also lets Vite tree-shake the page components, so the raw letter
            // content loaded via import.meta.glob never reaches the production bundle.
            if (process.env.NODE_ENV !== "production") return;
            const strip = (list: typeof pages) => {
                for (let i = list.length - 1; i >= 0; i--) {
                    if (
                        list[i].path === "/cover_letter" ||
                        list[i].path.startsWith("/cover_letter/")
                    ) {
                        list.splice(i, 1);
                    } else if (list[i].children) {
                        strip(list[i].children!);
                    }
                }
            };
            strip(pages);
        },
    },
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["@/assets/css/main.css"],
    runtimeConfig: {
        public: {
            phone: "",
        },
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: "gruvbox-dark-soft",
                    langs: ["php"],
                },
            },
        },
    },
});
