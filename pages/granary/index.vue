<template>
  <div class="dashboard_tests_page mb-10">
    <GranaryListing
      :granaries="granaries"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { granaryStore } from "@/stores/granary/granary.js";
import { storeToRefs } from "pinia";

// Init STores
const granaryModule = granaryStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await granaryModule.doGetGranaries(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
