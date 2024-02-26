import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const productTypeStore = defineStore("productTypeStore", {
  state: () => ({
    productTypes: []
  }),
  actions: {
    async doGetProductTypes(page, limit) {
      await axios.get(`${mainStore().apiURL}/productType?page=${page}&size=${limit}`).then((res) => {
        res.data.content.forEach((el) => {
          el.selectedId = el.id;
          el.selectedName = el.name;
        });
        this.productTypes = res.data;
      });
    },
    async doAddProductType(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/productType`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateType(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/productType`
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

export { productTypeStore as p };
//# sourceMappingURL=types-f1e6cd94.mjs.map
