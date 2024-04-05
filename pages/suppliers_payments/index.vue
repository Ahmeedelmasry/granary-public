<template>
  <div class="dashboard_tests_page mb-10">
    <SupplierPaymentsListing
      :payments="payments"
      :loading="loading"
      :granaries="granaries.content"
      :suppliers="suppliers.content"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { supplierPaymentsStore } from "@/stores/supplier_payments/supplier_payments.js";
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
          (el) => el.authority == "SUPPLIERPAYMENT_GETALL"
        ) &&
        !loggerData.value.authorities.find((el) => el.authority == "ADMIN")
      ) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const supplierPaymentsModule = supplierPaymentsStore();
const supplierModule = supplierStore();
const granaryModule = granaryStore();

// Store Data
const { payments } = storeToRefs(supplierPaymentsModule);
const { granaries } = storeToRefs(granaryModule);
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await supplierPaymentsModule.doGetPayments(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
  supplierModule.doGetSuppliers();
  granaryModule.doGetGranaries();
});
</script>
