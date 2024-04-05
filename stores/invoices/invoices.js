import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const invoiceModule = defineStore("invoiceModule", {
  state: () => ({
    invoices: [],
  }),
  actions: {
    async doGetInvoices(page, limit, filters) {
      await axios()
        .get(
          `${mainStore().apiURL}/supplyInvoice?page=${page}&size=${limit}${
            filters && filters.supplierId
              ? `&supplierId=${filters && filters.supplierId}`
              : ""
          }${
            filters && filters.granaryId
              ? `&granaryId=${filters.granaryId}`
              : ""
          }${
            filters && filters.creationFromDate
              ? `&creationFromDate=${filters.creationFromDate}`
              : ""
          }${
            filters && filters.creationToDate
              ? `&creationToDate=${filters.creationToDate}`
              : ""
          }${
            filters && filters.FromDate ? `&FromDate=${filters.FromDate}` : ""
          }${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}${
            filters && filters.productTypeId
              ? `&productTypeId=${filters.productTypeId}`
              : ""
          }${
            filters && filters.productId
              ? `&productId=${filters.productId}`
              : ""
          }${
            filters && filters.documentNumber
              ? `&documentNumber=${filters.documentNumber}`
              : ""
          }${
            filters && filters.carNumber
              ? `&carNumber=${filters.carNumber}`
              : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          this.invoices = res.data;
        })
        .catch((err) => console.log(err));
    },
    async doAddInvoice(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/supplyInvoice`, data, {
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
    async doUpdateInvoice(data) {
      let result;
      await axios()({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/supplyInvoice`,
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
