import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    apiURL: `http://localhost:8081/Granary`,
    // apiURL: `https://granary.onrender.com/Granary`,
    callSuccess: false,
    callMsg: "",
    callColor: 0,
    globalAlertType: "",
    globalAlertTitle: "",
    globalAlertText: "",
    btn_text: "Close",
    globalAlert: false,
  }),
  actions: {
    handleErr(type, title, text) {
      this.globalAlertType = type;
      this.globalAlertTitle = title;
      this.globalAlertText = text;
      this.globalAlert = true;
    },
    callResponse(responseType, msg, color) {
      this.callSuccess = responseType;
      this.callMsg = msg;
      this.callColor = color;
    },
    resetSnackbar() {
      this.callSuccess = false;
      this.callMsg = "";
    },
    async doDeleteItem(url, id) {
      let result;
      await axios()
        .delete(`${this.apiURL}/${url}/${id}`)
        .then((res) => {
          result = true;
          this.callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          result = false;
          this.callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
  },
});
