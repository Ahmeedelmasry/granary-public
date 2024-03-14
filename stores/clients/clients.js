import { defineStore } from "pinia";
import axios from "axios";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const clientStore = defineStore("clientStore", {
  state: () => ({
    clients: [],
    clientLockup: [],
    clientInvoices: [],
  }),
  actions: {
    async doGetClients(page, limit) {
      await axios
        .get(`${mainStore().apiURL}/client?page=${page}&size=${limit}`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          this.clients = res.data;
        });
    },
    async doGetClientsLockup() {
      await axios
        .get(`${mainStore().apiURL}/client/getClientsWithGranary`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          this.clientLockup = res.data;
        });
    },
    async doAddClient(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/client`, data, {
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
    async doUpdateClient(data) {
      let result;
      await axios({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/client`,
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
    async doGetClientInvoices(page, limit, filters) {
      let result;
      await axios
        .get(
          `${
            mainStore().apiURL
          }/companyDues/getCompanyDues?page=${page}&size=${limit}${
            filters && filters.granaryId
              ? `&granaryId=${filters.granaryId}`
              : ""
          }${
            filters && filters.clientID ? `&clientId=${filters.clientID}` : ""
          }${
            filters && filters.FromDate ? `&FromDate=${filters.FromDate}` : ""
          }${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          this.clientInvoices = res.data;
          result = true;
        })
        .catch((err) => {
          mainStore().callResponse(true, err.response.data.message, 2);
          result = false;
        });
      return result;
    },
    async doGetClientInvoicesReport(page, limit, filters) {
      let result;
      await axios
        .get(
          `${
            mainStore().apiURL
          }/companyDues/getCompanyDuesPayments?page=${page}&size=${limit}${
            filters && filters.granaryId
              ? `&granaryId=${filters.granaryId}`
              : ""
          }${
            filters && filters.clientID ? `&clientId=${filters.clientID}` : ""
          }${
            filters && filters.FromDate ? `&FromDate=${filters.FromDate}` : ""
          }${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}
          ${
            filters && filters.transactionType
              ? `&transactionType=${filters.transactionType}`
              : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          this.clientInvoices = res.data;
          result = true;
        })
        .catch((err) => {
          mainStore().callResponse(true, err.response.data.message, 2);
          result = false;
        });
      return result;
    },
    async doPayClients(data) {
      let result;
      await axios
        .post(`${mainStore().apiURL}/companyDues/pay`, data, {
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
  },
});
