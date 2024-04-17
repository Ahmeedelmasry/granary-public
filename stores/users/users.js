import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const userStore = defineStore("userStore", {
  state: () => ({
    users: [],
    transfers: [],
    payments: [],
    castody: 0,
  }),
  actions: {
    async doGetUsers(page, limit) {
      await axios()
        .get(`${mainStore().apiURL}/user?page=${page}&size=${limit}`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          this.users = res.data;
        });
    },
    async doAddUser(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/user/register`, data, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then(() => {
          result = true;
          mainStore().callResponse(true, "تم انشاء المستخدم بنجاح", 1);
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async doUpdateUser(data) {
      let result;
      await axios()({
        data: data,
        method: "PATCH",
        url: `${mainStore().apiURL}/tax`,
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
    async transferMoney(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/user/updateUserCustody`, data, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          result = true;
          mainStore().callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async transfersReport(page, limit, filters) {
      let result;
      await axios()
        .get(
          `${
            mainStore().apiURL
          }/user/getCustodyAdminReport?page=${page}&size=${limit}${
            filters && filters.adminUserId
              ? `&adminUserId=${filters.adminUserId}`
              : ""
          }${
            filters && filters.custodyUserId
              ? `&custodyUserId=${filters.custodyUserId}`
              : ""
          }${
            filters && filters.creationFromDate
              ? `&creationFromDate=${filters.creationFromDate}`
              : ""
          }${
            filters && filters.creationToDate
              ? `&creationToDate=${filters.creationToDate}`
              : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          result = true;
          console.log(res.data, "Transfers");
          this.transfers = res.data;
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async addPayment(data) {
      let result;
      await axios()
        .post(`${mainStore().apiURL}/user/updateUserPayment`, data, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          result = true;
          mainStore().callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async custodyPaymentsReport(page, limit, filters) {
      let result;
      await axios()
        .get(
          `${
            mainStore().apiURL
          }/user/getCustodyPaymentReport?page=${page}&size=${limit}${
            filters && filters.userId ? `&userId=${filters.userId}` : ""
          }${
            filters && filters.creationFromDate
              ? `&creationFromDate=${filters.creationFromDate}`
              : ""
          }${
            filters && filters.creationToDate
              ? `&creationToDate=${filters.creationToDate}`
              : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${authStore().token}`,
            },
          }
        )
        .then((res) => {
          result = true;
          console.log(res.data, "Payments");
          this.payments = res.data;
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
    async getCastody(id) {
      await axios()
        .get(`${mainStore().apiURL}/user/getCustody/${id}`, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          this.castody = res.data;
        });
    },
    async updateUser(data) {
      let result;
      await axios()
        .patch(`${mainStore().apiURL}/user`, data, {
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        })
        .then((res) => {
          result = true;
          mainStore().callResponse(true, res.data.message, 1);
        })
        .catch((err) => {
          console.log(err);
          result = false;
          mainStore().callResponse(true, err.response.data.message, 2);
        });
      return result;
    },
  },
});
