// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   port: 5000,
  // },
  nitro: {
    preset: "node",
    compressPublicAssets: true,
  },
  // app: {
  //   baseURL: "/",
  // },
  ssr: true,
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
    "flatpickr/dist/flatpickr.css",
  ],
  build: {
    transpile: ["vuetify", "print"],
  },
  modules: ["@pinia/nuxt"],
});
