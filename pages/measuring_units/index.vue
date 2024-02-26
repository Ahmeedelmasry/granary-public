<template>
  <div class="dashboard_tests_page mb-10">
    <MeasuringUnitsListing
      :units="units"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { measuringUnitStore } from "@/stores/measuring_units/measuringUnits.js";
import { storeToRefs } from "pinia";

// Init STores
const measuringUnitsModule = measuringUnitStore();

// Store Data
const { units } = storeToRefs(measuringUnitsModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await measuringUnitsModule.doGetUnits(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
