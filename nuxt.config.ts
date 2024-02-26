// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "firebase",
  },
  devtools: { enabled: false },
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
});
