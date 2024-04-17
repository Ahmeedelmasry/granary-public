<template>
  <div class="dashboard_tests_page mb-10">
    <ReportsInvoices
      :invoices="invoices"
      :loading="loading"
      :granaries="granaries.content"
      :suppliers="suppliers.content"
      @regetItems="getData($event.page, $event.limit)"
      @filterData="getData(1, 1000, $event)"
    />
  </div>
</template>

<script setup>
import { invoiceModule } from "@/stores/invoices/invoices.js";
import { granaryStore } from "@/stores/granary/granary.js";
import { supplierStore } from "@/stores/supplier/supplier.js";
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/auth/auth";


definePageMeta({
  middleware: [
    (to, from) => {
      const { loggerData } = storeToRefs(authStore());
      if (
        !loggerData.value.authorities.find(
          (el) => el.authority == "SUPPLYINVOICE_GETALL"
        ) &&
        !loggerData.value.authorities.find((el) => el.authority == "ADMIN")
      ) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const invoicesModule = invoiceModule();
const supplierModule = supplierStore();
const granaryModule = granaryStore();

// Store Data
const { invoices } = storeToRefs(invoicesModule);
const { granaries } = storeToRefs(granaryModule);
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const loading = ref(false);

const filtersData = ref({
  supplierId: null,
  granaryId: null,
  creationFromDate: null,
  creationToDate: null,
  FromDate: null,
  ToDate: null,
});

// Methods
const getData = async (page, limit, filters) => {
  loading.value = true;
  filtersData.value = filters
    ? filters
    : {
        supplierId: null,
        granaryId: null,
        creationFromDate: null,
        creationToDate: null,
        FromDate: null,
        ToDate: null,
      };
  await invoicesModule.doGetInvoices(
    page - 1,
    limit,
    filtersData.value
  );
  loading.value = false;
};

// Hooks
onMounted(() => {
  invoices.value = [];
  // getData(1, 10);
  supplierModule.doGetSuppliers(0, 10000);
  granaryModule.doGetGranaries(0, 10000);
});
</script>
