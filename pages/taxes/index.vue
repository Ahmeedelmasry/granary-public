<template>
  <div class="dashboard_tests_page mb-10">
    <TaxesListing
      :taxes="taxes"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { taxStore } from "@/stores/taxes/taxes";
import { storeToRefs } from "pinia";

// Init STores
const taxModule = taxStore();

// Store Data
const { taxes } = storeToRefs(taxModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await taxModule.doGetTaxes(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
