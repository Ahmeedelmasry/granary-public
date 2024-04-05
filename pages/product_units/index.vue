<template>
  <div class="dashboard_tests_page mb-10">
    <ProductUnitsListing
      :productUnits="productUnits"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { productUnitsStore } from "@/stores/product_units/units";
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/auth/auth";

definePageMeta({
  middleware: [
    (to, from) => {
      const { loggerData } = storeToRefs(authStore());
      if (
        !loggerData.value.authorities.find(
          (el) => el.authority == "PACKAGEUNIT_GETALL"
        )
      ) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const productUnitsModule = productUnitsStore();

// Store Data
const { productUnits } = storeToRefs(productUnitsModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await productUnitsModule.doGetProductUnits(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
