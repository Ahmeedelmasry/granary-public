import { defineStore } from "pinia";
// import axios from "axios";
// import { mainStore } from "@/stores";

export const authStore = defineStore("authStore", {
  state: () => ({
    loggerData: {},
  }),
  actions: {
    checkLogin() {
      if (this.loggerData.name) return true;
      return false;
    },
  },
});
