import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const productTypeStore = defineStore("productTypeStore", {
  state: () => ({
    productTypes: [],
  }),
  actions: {
    async doGetProductTypes(page, limit) {
      await axios()
        .get(`${mainStore().apiURL}/productType?page=${page}&size=${limit}`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          const cont = res.data.content.filter((el) => !el.locked);
          res.data.content = cont;
          res.data.content.forEach((el) => {
            el.selectedId = el.id;
            el.selectedName = el.name;
          });
          this.productTypes = res.data;
        });
    },
    async doAddProductType(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/productType`, data, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
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
      await axios()({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/productType`,
        headers: {
          Authorization: `Bearer ${authStore().token}`,
        },
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
