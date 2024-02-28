export default defineNuxtRouteMiddleware(async (to, from) => {
  const logger = useCookie("logger");
  if (!logger.value) {
    if (to.name != "signin") {
      return useRouter().push({ name: "signin" });
    }
  } else {
    if (to.name == "signin") {
      return useRouter().push({ name: "index" });
    }
  }
});
