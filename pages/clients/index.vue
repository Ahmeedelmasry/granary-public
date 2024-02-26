<template>
  <div class="dashboard_tests_page mb-10">
    <ClientsListing
      :clients="clients"
      :loading="loading"
      @regetItems="getData($event.page, $event.limit)"
    />
  </div>
</template>

<script setup>
import { clientStore } from "@/stores/clients/clients";
import { storeToRefs } from "pinia";

// Init STores
const clientsModule = clientStore();

// Store Data
const { clients } = storeToRefs(clientsModule);

// Local Data
const loading = ref(true);

// Methods
const getData = async (page, limit) => {
  loading.value = true;
  await clientsModule.doGetClients(page - 1, limit);
  loading.value = false;
};

// Hooks
onMounted(() => {
  getData(1, 10);
});
</script>
