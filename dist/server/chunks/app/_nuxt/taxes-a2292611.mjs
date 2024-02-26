import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const taxStore = defineStore("taxStore", {
  state: () => ({
    taxes: []
  }),
  actions: {
    async doGetTaxes(page, limit) {
      await axios.get(`${mainStore().apiURL}/tax?page=${page}&size=${limit}`).then((res) => {
        this.taxes = res.data;
      });
    },
    async doAddTax(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/tax`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateTax(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/tax`
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

export { taxStore as t };
//# sourceMappingURL=taxes-a2292611.mjs.map
