<template>
  <div class="supplierPaymentReportFilter mb-5">
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
              auto-select-first
              :disabled="loading"
              placeholder="اختر المورد"
              @update:model-value="
                supplierFound ? (supplierFound = false) : false
              "
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
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0">
        <div class="field_container">
          <label for="carNumber">رقم السيارة</label>
          <div class="input_parent position-relative">
            <input autocomplete="off"
              type="text"
              placeholder="رقم السيارة"
              name="carNumber"
              :disabled="loading"
              id="carNumber"
              v-model="data.carNumber"
            />
            <v-icon class="position-absolute">mdi-car </v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0">
        <div class="field_container">
          <label for="documentNumber">رقم المستند</label>
          <div class="input_parent position-relative">
            <input autocomplete="off"
              type="text"
              placeholder="رقم المستند"
              name="documentNumber"
              :disabled="loading"
              id="documentNumber"
              v-model="data.documentNumber"
            />
            <v-icon class="position-absolute">mdi-file </v-icon>
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
          height="37"
          @click="submitFilter"
          class="font-weight-bold mb-2"
          :disabled="loading"
          density="compact"
          elevation="0"
        >
          <v-icon size="27">mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { supplierStore } from "@/stores/supplier/supplier";
import { storeToRefs } from "pinia";
import moment from "moment";

// Init Store
const supplierModule = supplierStore();

// Store Data
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const data = ref({
  supplierId: null,
  carNumber: null,
  documentNumber: null,
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Methods
const submitFilter = () => {
  const obj = {
    supplierId: data.value.supplierId,
    carNumber: data.value.carNumber,
    documentNumber: data.value.documentNumber,
  };
  emits("filterData", obj);
};

onMounted(() => {
  supplierModule.doGetSuppliers(0, 10000);
});
</script>
