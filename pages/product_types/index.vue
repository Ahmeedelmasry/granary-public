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
