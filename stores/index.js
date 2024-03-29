import { defineStore } from "pinia";
import axios from "axios";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    apiURL: `https://granary.onrender.com/Granary`,
    callSuccess: false,
    callMsg: "",
    callColor: 0,
  }),
  actions: {
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
      await axios
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
