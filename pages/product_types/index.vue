<template>
  <div class="dashboard_tests_page mb-10">
    <ProductTypesListing
      :productTypes="productTypes"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { productTypeStore } from "@/stores/product_types/types";
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/auth/auth";

definePageMeta({
  middleware: [
    (to, from) => {
      const { loggerData } = storeToRefs(authStore());
      if (
        !loggerData.value.authorities.find(
          (el) => el.authority == "PRODUCTTYPE_GETALL"
        ) &&
        !loggerData.value.authorities.find((el) => el.authority == "ADMIN")
      ) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const productTypeModule = productTypeStore();

// Store Data
const { productTypes } = storeToRefs(productTypeModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await productTypeModule.doGetProductTypes(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
