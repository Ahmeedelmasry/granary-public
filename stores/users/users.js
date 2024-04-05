import { defineStore } from "pinia";
import axios from "@/plugins/axios_instance.js";
import { mainStore } from "@/stores";
import { authStore } from "@/stores/auth/auth";

export const userStore = defineStore("userStore", {
  state: () => ({
    users: [],
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
  },
});
