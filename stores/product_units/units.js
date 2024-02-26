import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";

export const productUnitsStore = defineStore("productUnitsStore", {
  state: () => ({
    productUnits: [],
  }),
  actions: {
    async doGetProductUnits(page, limit) {
      await axios
        .get(`${mainStore().apiURL}/packageUnit?page=${page}&size=${limit}`)
        .then((res) => {
          this.productUnits = res.data;
        });
    },
    async doAddProductunit(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/packageUnit`, data)
        .then((res) => {
          result = true;
          mainStore().callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async doUpdateUnit(data) {
      let result;
      await axios({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/packageUnit`,
      })
        .then((res) => {
          result = true;
          mainStore().callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          mainStore().callResponse(true, err.response.data.message, 2);
          result = false;
        });
      return result;
    },
  },
});
