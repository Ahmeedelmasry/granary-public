import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";

export const mainStore = defineStore("mainStore", {
  state: () => ({
<<<<<<< HEAD
    apiURL: `http://localhost:8081/Granary`,
=======
    apiURL: `https://granary.onrender.com/Granary`,
>>>>>>> 13b77525d67c03a03162dc2bbf218a63d9f4090f
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
