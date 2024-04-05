import axios from "axios";
import { authStore } from "@/stores/auth/auth.js";

export default defineNuxtPlugin(() => {
  const instance = axios.create({});

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      // if (error.response?.status == 403) {
      //   console.log("Unauthorized");
      //   useCookie("logger").value = undefined;
      //   authStore().loggerData = {};
      //   authStore().token = null;
      //   setTimeout(() => {}, useRouter().push({ name: "signin" }));
      // }
      return Promise.reject(error);
    }
  );

  return instance;
});
