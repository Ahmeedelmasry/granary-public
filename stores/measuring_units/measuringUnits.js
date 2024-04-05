import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const measuringUnitStore = defineStore("measuringUnitStore", {
  state: () => ({
    units: [],
  }),
  actions: {
    async doGetUnits(page, limit) {
      await axios()
        .get(`${mainStore().apiURL}/measuringUnit?page=${page}&size=${limit}`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          this.units = res.data;
        });
    },
    async doAddUnit(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/measuringUnit`, data, {
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
    async doUpdateUnit(data) {
      let result;
      await axios()({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/measuringUnit`,
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
