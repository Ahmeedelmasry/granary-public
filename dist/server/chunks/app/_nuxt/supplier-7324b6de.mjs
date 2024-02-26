import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const supplierStore = defineStore("supplierStore", {
  state: () => ({
    suppliers: []
  }),
  actions: {
    async doGetSuppliers(page, limit) {
      await axios.get(`${mainStore().apiURL}/supplier?page=${page}&size=${limit}`).then((res) => {
        this.suppliers = res.data;
      });
    },
    async doAddSupplier(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/supplier`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateSupplier(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/supplier`
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

export { supplierStore as s };
//# sourceMappingURL=supplier-7324b6de.mjs.map
