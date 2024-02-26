<template>
  <div class="dashboard_clients_payments mb-10">
    <ClientsPaymentsInvoices
      :invoices="clientInvoices"
      :loading="loading"
      :granaries="granaries.content"
      :suppliers="suppliers.content"
      @regetItems="getData($event.page, $event.limit)"
      @filterData="getData($event)"
    />
  </div>
</template>

<script setup>
import { clientStore } from "@/stores/clients/clients.js";
import { granaryStore } from "@/stores/granary/granary.js";
import { supplierStore } from "@/stores/supplier/supplier.js";
import { storeToRefs } from "pinia";

// Init STores
const clientModule = clientStore();
const supplierModule = supplierStore();
const granaryModule = granaryStore();

// Store Data
const { clientInvoices } = storeToRefs(clientModule);
const { granaries } = storeToRefs(granaryModule);
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const loading = ref(false);

const filtersData = ref({
  clientID: null,
  granaryId: null,
  FromDate: null,
  ToDate: null,
});

// Methods
const getData = async (filters) => {
  loading.value = true;
  filtersData.value = filters
    ? filters
    : {
        clientID: null,
        granaryId: null,
        FromDate: null,
        ToDate: null,
      };
  await clientModule.doGetClientInvoices(
    filters.page - 1,
    filters.limit,
    filtersData.value
  );
  loading.value = false;
};

// Hooks
onMounted(() => {
  clientInvoices.value = [];
  supplierModule.doGetSuppliers(0, 10000);
  granaryModule.doGetGranaries(0, 10000);
});
</script>
