<template>
  <div class="dashboard_tests_page mb-10">
    <ReportsPaymentCustody
      :loading="loading"
      :payments="payments"
      @regetItems="getData($event.page, $event.limit)"
      @filterData="getData(1, 1000, $event)"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { userStore } from "@/stores/users/users";

// Init STores
const usersModule = userStore();

// Store Data
const { payments } = storeToRefs(usersModule);

// Local Data
const loading = ref(false);

const filtersData = ref({
  custodyUserId: null,
  adminUserId: null,
  creationFromDate: null,
  creationToDate: null,
});

// Methods
const getData = async (page, limit, filters) => {
  loading.value = true;
  filtersData.value = filters
    ? filters
    : {
        adminUserId: null,
        custodyUserId: null,
        creationFromDate: null,
        creationToDate: null,
      };

  await usersModule.custodyPaymentsReport(page - 1, limit, filtersData.value);
  loading.value = false;
};

// Hooks
onMounted(() => {
  payments.value = [];
});
</script>
