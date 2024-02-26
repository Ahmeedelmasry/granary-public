import { d as defineStore, m as mainStore } from '../server.mjs';
import axios from 'axios';

const granaryStore = defineStore("granaryStore", {
  state: () => ({
    granaries: []
  }),
  actions: {
    async doGetGranaries(page, limit) {
      await axios.get(`${mainStore().apiURL}/granary?page=${page}&size=${limit}`).then((res) => {
        this.granaries = res.data;
      });
    },
    async doAddGranary(data) {
      let result;
      await axios.post(`${mainStore().apiURL}/granary`, data).then((res) => {
        result = true;
        mainStore().callResponse(true, res.data.message, 1);
      }).catch((err) => {
        result = false;
        mainStore().callResponse(true, err.response.data.message, 2);
      });
      return result;
    },
    async doUpdateGranary(data) {
      let result;
      await axios({
        data,
        method: "PATCH",
        url: `${mainStore().apiURL}/granary`
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

export { granaryStore as g };
//# sourceMappingURL=granary-ab731415.mjs.map
