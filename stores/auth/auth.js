import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";

export const authStore = defineStore("authStore", {
  state: () => ({
    loggerData: {},
    token: null,
  }),
  actions: {
    checkLogin() {
      if (this.loggerData.name) return true;
      return false;
    },
    async doLogin(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/user/login`, data)
        .then(async (res) => {
          result = true;
          var base64Url = res.data.token.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var jsonPayload = decodeURIComponent(
            window
              .atob(base64)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
          this.loggerData = JSON.parse(jsonPayload);
          this.token = res.data.token;
        })
        .catch((err) => {
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
  },
});
