<template>
  <div class="dashboard_tests_page mb-10">
    <ReportsTransferCustody
      :loading="loading"
      :transfers="transfers"
      @regetItems="getData($event.page, $event.limit)"
      @filterData="getData(1, 1000, $event)"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { authStore } from "@/stores/auth/auth";
import { userStore } from "@/stores/users/users";

definePageMeta({
  middleware: [
    (to, from) => {
      const { loggerData } = storeToRefs(authStore());
      if (!loggerData.value.authorities.find((el) => el.authority == "ADMIN")) {
        return navigateTo("/");
      }
    },
  ],
});

// Init STores
const usersModule = userStore();

// Store Data
const { transfers } = storeToRefs(usersModule);

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

  await usersModule.transfersReport(page - 1, limit, filtersData.value);
  loading.value = false;
};

// Hooks
onMounted(() => {
  transfers.value = [];
});
</script>
