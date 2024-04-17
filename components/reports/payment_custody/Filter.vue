<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0" v-if="admin">
        <div class="field_container">
          <label for="supplierId">اسم المستخدم</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="userName"
              item-value="id"
              :items="users.content"
              transition="slide-y-transition"
              variant="outlined"
              hide-details
              v-model="data.userId"
              auto-select-first
              :disabled="loading"
              placeholder="اسم المستخدم"
              @update:model-value="
                supplierFound ? (supplierFound = false) : false
              "
              name="supplier"
              id="supplier"
            >
            </v-autocomplete>
            <v-icon class="position-absolute">mdi-account</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="creationFromDate">من</label>
          <div class="input_parent position-relative">
            <input
              type="date"
              name="creationFromDate"
              :disabled="loading"
              id="creationFromDate"
              v-model="data.creationFromDate"
              style="padding-right: 0 !important"
            />
            <v-icon class="position-absolute">mdi-calendar</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="creationToDate">الي</label>
          <div class="input_parent position-relative">
            <input
              type="date"
              name="creationToDate"
              id="creationToDate"
              :disabled="loading"
              v-model="data.creationToDate"
              style="padding-right: 0 !important"
            />
            <v-icon class="position-absolute">mdi-calendar</v-icon>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="pb-1"
        style="display: flex; align-items: flex-end"
      >
        <v-btn
          color="blue"
          width="100"
          height="40"
          elevation="0"
          @click="submitFilter"
          class="font-weight-bold"
          :disabled="loading"
          >بحث</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/users/users";
import { storeToRefs } from "pinia";
import moment from "moment";

import { authStore } from "@/stores/auth/auth";

// Init Store
const authModule = authStore();
const usersModule = userStore();

// Store Data
const { loggerData } = storeToRefs(authModule);
const { users } = storeToRefs(usersModule);

const admin = computed(() => {
  return loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

// Local Data
const data = ref({
  userId: null,
  creationFromDate: null,
  creationToDate: null,
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Methods
const submitFilter = () => {
  const obj = {
    userId: admin.value ? data.value.userId || null : loggerData.value.DD,
    creationFromDate: data.value.creationFromDate
      ? moment(data.value.creationFromDate).format("DD/MM/YYYY")
      : null,
    creationToDate: data.value.creationToDate
      ? moment(
          Date.now(data.value.creationToDate) + 24 * 60 * 60 * 1000
        ).format("DD/MM/YYYY")
      : null,
  };
  emits("filterData", obj);
};

onMounted(() => {
  usersModule.doGetUsers(0, 10000);
});
</script>
