<template>
  <div class="dashboard_tests_page mb-10">
    <ExportInvoicesListing
      :invoices="invoices"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
      @filterData="filterData($event)"
    />
  </div>
</template>

<script setup>
import { invoiceModule } from "@/stores/invoices/invoices.js";
import { storeToRefs } from "pinia";

// Init STores
const invoicesModule = invoiceModule();

// Store Data
const { invoices } = storeToRefs(invoicesModule);

// Local Data
const loading = ref(true);
const supplierId = ref(null);
const carNumber = ref(null);
const documentNumber = ref(null);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await invoicesModule.doGetInvoices(page - 1, limit, {
    supplierId: supplierId.value,
    carNumber: carNumber.value,
    documentNumber: documentNumber.value,
  });
  loading.value = false;
};

const filterData = (e) => {
  carNumber.value = e.filters.carNumber;
  documentNumber.value = e.filters.documentNumber;
  supplierId.value = e.filters.supplierId;
  getData(e.page, e.limit);
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
