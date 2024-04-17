import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const logger = useCookie("logger");
  const { token } = storeToRefs(authStore());
  if (!logger.value) {
    if (to.name != "signin") {
      return navigateTo({ name: "signin" });
    }
  } else {
    if (!token.value) {
    token.value = logger.value;
      authStore().decodeToken(token.value);
    }
    if (to.name == "signin") {
      return navigateTo({ name: "index" });
    }
  }
});
