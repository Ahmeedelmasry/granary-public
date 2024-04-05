import axios from "axios";
import { authStore } from "@/stores/auth/auth.js";
import { mainStore } from "@/stores";

export default defineNuxtPlugin(() => {
  const instance = axios.create({});

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response?.status == 403) {
        console.log("Unauthorized");
        useCookie("logger").value = undefined;
        setTimeout(() => {
          useRouter().push({ name: "signin" });
          setTimeout(() => {
            authStore().loggerData = {};
            authStore().token = null;
          }, 100);
          mainStore().callResponse(true, "قم بتسجيل الدخول", 2);
        }, 100);
      }
      return Promise.reject(error);
    }
  );

  return instance;
});
