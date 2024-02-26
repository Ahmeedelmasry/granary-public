// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Css
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
    "swiper/css/effect-cube",
    "assets/css/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt"],
  // $production: {
  //   routeRules: {
  //     "/**": { ssr: true },
  //   },
  // },
});
