import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";

export const productStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async doGetProducts(page, limit) {
      await axios
        .get(`${mainStore().apiURL}/product?page=${page}&size=${limit}`)
        .then((res) => {
          this.products = res.data;
        });
    },
    async doAddProduct(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/product`, data)
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
    async doUpdateProduct(data) {
      let result;
      await axios({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/product`,
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
