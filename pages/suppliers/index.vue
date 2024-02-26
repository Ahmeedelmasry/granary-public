<template>
  <div class="dashboard_tests_page mb-10">

    <SuppliersListing
      :suppliers="suppliers"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { supplierStore } from "@/stores/supplier/supplier";
import { storeToRefs } from "pinia";

// Init STores
const suppliersModule = supplierStore();

// Store Data
const { suppliers } = storeToRefs(suppliersModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await suppliersModule.doGetSuppliers(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
