import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";
import moment from 'moment'

export const mainReportStore = defineStore("mainReportStore", {
  state: () => ({
    data: [],
  }),
  actions: {
    async getReportData(filters) {
      await axios()
        .get(
          `${mainStore().apiURL}/product/getProductQuantities?productId=${filters.productId.id
          }${filters.date ? `&date=${filters.date}` : `&date=${moment(new Date()).format("DD/MM/YYYY")}`}`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          this.data = res.data;
        });
    },
  },
});
