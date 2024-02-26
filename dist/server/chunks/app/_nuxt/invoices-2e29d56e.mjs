import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const invoiceModule = defineStore("invoiceModule", {
  state: () => ({
    invoices: []
  }),
  actions: {
    async doGetInvoices(page, limit, filters) {
      await axios.get(
        `${mainStore().apiURL}/supplyInvoice?page=${page}&size=${limit}${filters && filters.supplierId ? `&supplierId=${filters && filters.supplierId}` : ""}${filters && filters.granaryId ? `&granaryId=${filters.granaryId}` : ""}${filters && filters.creationFromDate ? `&creationFromDate=${filters.creationFromDate}` : ""}${filters && filters.creationToDate ? `&creationToDate=${filters.creationToDate}` : ""}${filters && filters.FromDate ? `&FromDate=${filters.FromDate}` : ""}${filters && filters.ToDate ? `&ToDate=${filters.ToDate}` : ""}${filters && filters.productTypeId ? `&productTypeId=${filters.productTypeId}` : ""}${filters && filters.productId ? `&productId=${filters.productId}` : ""}`
      ).then((res) => {
        this.invoices = res.data;
      });
    },
    async doAddInvoice(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/supplyInvoice`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateInvoice(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/supplyInvoice`
      }).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        mainStore().callResponse(true, err.response.data.message, 2);
        result = false;
      });
      return result;
    }
  }
});

export { invoiceModule as i };
//# sourceMappingURL=invoices-2e29d56e.mjs.map
