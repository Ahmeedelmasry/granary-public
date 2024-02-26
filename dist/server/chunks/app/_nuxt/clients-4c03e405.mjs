import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const clientStore = defineStore("clientStore", {
  state: () => ({
    clients: [],
    clientLockup: [],
    clientInvoices: []
  }),
  actions: {
    async doGetClients(page, limit) {
      await axios.get(`${mainStore().apiURL}/client?page=${page}&size=${limit}`).then((res) => {
        this.clients = res.data;
      });
    },
    async doGetClientsLockup() {
      await axios.get(`${mainStore().apiURL}/client/getClientsWithGranary`).then((res) => {
        this.clientLockup = res.data;
      });
    },
    async doAddClient(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/client`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateClient(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/client`
      }).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        mainStore().callResponse(true, err.response.data.message, 2);
        result = false;
      });
      return result;
    },
    async doGetClientInvoices(page, limit, filters) {
      let result;
      await axios.get(
        `${mainStore().apiURL}/companyDues/getCompanyDues?page=${page}&size=${limit}${filters && filters.granaryId ? `&granaryId=${filters.granaryId}` : ""}${filters && filters.clientID ? `&clientId=${filters.clientID}` : ""}${filters && filters.FromDate ? `&FromDate=${filters.FromDate}` : ""}${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}`
      ).then((res) => {
        this.clientInvoices = res.data;
        result = true;
      }).catch((err) => {
        mainStore().callResponse(true, err.response.data.message, 2);
        result = false;
      });
      return result;
    },
    async doPayClients(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/companyDues/pay`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    }
  }
});

export { clientStore as c };
//# sourceMappingURL=clients-4c03e405.mjs.map