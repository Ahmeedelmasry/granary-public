import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";

export const supplierPaymentsStore = defineStore("supplierPaymentsStore", {
  state: () => ({
    payments: [],
    supplierDues: [],
    supplierInvoice: null,
  }),
  actions: {
    async doGetPayments(page, limit, filters) {
      await axios
        .get(
          `${mainStore().apiURL}/supplierPayment?page=${page}&size=${limit}${
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
          }${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}`
        )
        .then((res) => {
          this.payments = res.data;
        });
    },
    async doGetSupplierDues(page, limit, filters) {
      await axios
        .get(
          `${
            mainStore().apiURL
          }/supplier/getSupplierTotals?page=${page}&size=${limit}${
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
          }${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}`
        )
        .then((res) => {
          this.supplierDues = res.data;
        });
    },
    async doGetSupplierFinance(supplier, granary) {
      this.supplierInvoice = null;
      let result;
      await axios
        .get(
          `${
            mainStore().apiURL
          }/supplierPayment/getSupplierDue?supplierId=${supplier}&granaryId=${granary}`
        )
        .then((res) => {
          this.supplierInvoice = res.data;
          result = true;
        })
        .catch((err) => {
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async doAddPayment(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/supplierPayment`, data)
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
    async doUpdatePayment(data) {
      let result;
      await axios({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/supplierPayment`,
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
