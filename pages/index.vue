<template>
  <div class="main_page">
    <MainReportListing
      :data="mainReportStore().data"
      :loading="loading"
      @filterData="getData($event)"
    />
  </div>
</template>

<script setup>
import { mainReportStore } from "@/stores/main_report/mainReport";

// Data
const loading = ref(false);

// Methods
const getData = async (filters) => {
  loading.value = true;
  await mainReportStore().getReportData(filters);
  loading.value = false;
};
</script>
