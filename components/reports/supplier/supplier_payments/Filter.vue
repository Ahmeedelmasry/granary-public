<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0">
        <div class="field_container">
          <label for="supplierId">اختر المورد</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="name"
              item-value="id"
              :items="suppliers.content"
              transition="slide-y-transition"
              variant="outlined"
              hide-details
              v-model="data.supplierId"
              :disabled="loading"
              placeholder="اختر المورد"
              name="supplier"
              id="supplier"
              :custom-filter="
                (item, text, obj) =>
                  obj.title.toString().includes(text) ||
                  obj.value.toString().includes(text)
              "
            >
              <template v-slot:prepend-item>
                <div
                  class="d-flex ps-4 pe-2 py-2"
                  style="justify-content: space-between"
                >
                  <span>الاسم</span>
                  <span>الكود</span>
                </div>
              </template>

              <template v-slot:item="{ props, item }">
                <div
                  v-bind="props"
                  class="d-flex select_slot"
                  style="justify-content: space-between"
                >
                  <v-list-item>{{ item.raw.name }}</v-list-item>
                  <v-list-item>{{ item.raw.id }}</v-list-item>
                </div>
              </template>
            </v-autocomplete>
            <v-icon class="position-absolute">mdi-account-cowboy-hat</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="granaryId">اختر الصومعة</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="name"
              item-value="id"
              :items="granaries.content"
              transition="slide-y-transition"
              variant="outlined"
              :disabled="loading"
              hide-details
              v-model="data.granaryId"
              placeholder="اختر الصومعة"
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-store-24-hour</v-icon>
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
      <!-- <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container" dir="rtl">
          <label for="FromDate">تاريخ السداد (من)</label>
          <div class="input_parent position-relative">
            <input
              type="date"
              name="FromDate"
              id="FromDate"
              :disabled="loading"
              v-model="data.FromDate"
              style="padding-right: 0 !important"
            />
            <v-icon class="position-absolute">mdi-calendar</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container" dir="rtl">
          <label for="ToDate">تاريخ السداد (الي)</label>
          <div class="input_parent position-relative">
            <input
              type="date"
              name="ToDate"
              v-model="data.ToDate"
              :disabled="loading"
              id="ToDate"
              style="padding-right: 0 !important"
            />
            <v-icon class="position-absolute">mdi-calendar</v-icon>
          </div>
        </div>
      </v-col> -->
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
import { granaryStore } from "@/stores/granary/granary";
import { supplierStore } from "@/stores/supplier/supplier";
import { storeToRefs } from "pinia";
import moment from "moment";

// Init Store
const granaryModule = granaryStore();
const supplierModule = supplierStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const data = ref({
  supplierId: null,
  granaryId: null,
  creationFromDate: null,
  creationToDate: null,
  FromDate: null,
  ToDate: null,
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Methods
const submitFilter = () => {
  const obj = {
    supplierId: data.value.supplierId,
    granaryId: data.value.granaryId,
    creationFromDate: data.value.creationFromDate
      ? moment(data.value.creationFromDate).format("DD/MM/YYYY")
      : null,
    creationToDate: data.value.creationToDate
      ? moment(
          Date.now(data.value.creationToDate) + 24 * 60 * 60 * 1000
        ).format("DD/MM/YYYY")
      : null,
    FromDate: data.value.FromDate
      ? moment(data.value.FromDate).format("DD/MM/YYYY")
      : null,
    ToDate: data.value.ToDate
      ? moment(data.value.ToDate).format("DD/MM/YYYY")
      : null,
  };
  emits("filterData", obj);
};

onMounted(() => {
  granaryModule.doGetGranaries(0, 10000);
  supplierModule.doGetSuppliers(0, 10000);
});
</script>
