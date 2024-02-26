import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";

export const productTypeStore = defineStore("productTypeStore", {
  state: () => ({
    productTypes: [],
  }),
  actions: {
    async doGetProductTypes(page, limit) {
      await axios
        .get(`${mainStore().apiURL}/productType?page=${page}&size=${limit}`)
        .then((res) => {
          res.data.content.forEach((el) => {
            el.selectedId = el.id;
            el.selectedName = el.name;
          });
          this.productTypes = res.data;
        });
    },
    async doAddProductType(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/productType`, data)
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
    async doUpdateType(data) {
      let result;
      await axios({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/productType`,
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
