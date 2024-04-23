<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="productId">المنتج</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              return-object
              :items="products.content"
              item-title="name"
              item-value="id"
              name="productId"
              id="productId"
              :disabled="loading"
              v-model="data.productId"
              variant="outlined"
              placeholder="اختر المنتج"
              @update:model-value="data.productTypeId = null"
              hide-details
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-basket</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="creationFromDate">تاريخ</label>
          <div class="input_parent position-relative">
            <flat-pickr
              name="date_from"
              id="date_from"
              v-model="data.date"
              :config="config"
              :disabled="loading"
              placeholder="سنة/يوم/شهر"
            />
            <v-icon class="position-absolute" style="z-index: -1"
              >mdi-calendar</v-icon
            >
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
          :disabled="loading || !data.productId"
          >بحث</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/products/products.js";
import { storeToRefs } from "pinia";

import { authStore } from "@/stores/auth/auth";
import flatPickr from "vue-flatpickr-component";
import { Arabic } from "flatpickr/dist/l10n/ar.js";
import moment from "moment";

// Init Store
const authModule = authStore();
const productsModule = productStore();

// Store Data
const { products } = storeToRefs(productsModule);
const { loggerData } = storeToRefs(authModule);

const admin = computed(() => {
  return loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

// Local Data
const data = ref({
  date: null,
  productTypeId: null,
});

const config = ref({
  wrap: true,
  altFormat: "d/m/Y",
  altInput: true,
  dateFormat: "d/m/Y",
  enabled: true,
  locale: Arabic,
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Methods
const submitFilter = () => {
  const obj = {
    productId: data.value.productId,
    date: data.value.date,
  };
  emits("filterData", obj);
};

onMounted(async () => {
  await productsModule.doGetProducts(0, 10000);
  if (
    products.value.content &&
    products.value.content.find((el) => el.name == "قمح")
  ) {
    data.value.productId = products.value.content.find(
      (el) => el.name == "قمح"
    );
    submitFilter()
  }
});
</script>
