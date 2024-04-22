import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const supplierStore = defineStore("supplierStore", {
  state: () => ({
    suppliers: [],
  }),
  actions: {
    async doGetSuppliers(page, limit, search) {
      await axios()
        .get(
          `${mainStore().apiURL}/supplier?page=${page}&size=${limit}${
            search ? `&searchText=${search}` : "&searchText="
          }`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          const cont = res.data.content.filter((el) => !el.locked);
          res.data.content = cont;
          this.suppliers = res.data;
        });
    },
    async doAddSupplier(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/supplier`, data, {
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
    async doUpdateSupplier(data) {
      let result;
      await axios()({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/supplier`,
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
