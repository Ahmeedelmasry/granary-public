import { defineStore } from "pinia";

export const langStore = defineStore("langStore", {
  state: () => ({
    lang: ["en"],
    isDashboard: false,
  }),
  actions: {
    changeLang(language) {
      this.lang = [language];
    },
    switchDashboard(val) {
      this.isDashboard = val;
    },
  },
});
