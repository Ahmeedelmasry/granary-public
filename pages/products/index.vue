<template>
  <div class="dashboard_tests_page mb-10">
    <ProductsListing
      :products="products"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
      :units="units"
    />
  </div>
</template>

<script setup>
import { productStore } from "@/stores/products/products";
import { storeToRefs } from "pinia";
import { measuringUnitStore } from "@/stores/measuring_units/measuringUnits.js";
import { authStore } from "@/stores/auth/auth";

definePageMeta({
  middleware: [
    (to, from) => {
      const { loggerData } = storeToRefs(authStore());
      if (
        !loggerData.value.authorities.find(
          (el) => el.authority == "PRODUCT_GETALL"
        ) &&
        !loggerData.value.authorities.find((el) => el.authority == "ADMIN")
      ) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const productsModule = productStore();
const measuringUnitsModule = measuringUnitStore();

// Store Data
const { products } = storeToRefs(productsModule);
const { units } = storeToRefs(measuringUnitsModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await Promise.all([
    // measuringUnitsModule.doGetUnits(0, 10000),
    productsModule.doGetProducts(page - 1, limit),
  ]);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
