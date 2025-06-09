import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css"],
});
