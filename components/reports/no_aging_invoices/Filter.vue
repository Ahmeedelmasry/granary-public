<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
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
          <label for="productId">المنتج</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              return-object
              :items="products.content"
              item-title="name"
              item-value="id"
              name="productId"
              id="productId"
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
          <label for="productTypeId">الفرز</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              return-object
              :items="productTypes"
              item-title="productType.name"
              item-value="id"
              variant="outlined"
              name="productTypeId"
              id="productTypeId"
              no-data-text="لايوجد بيانات"
              v-model="data.productTypeId"
              hide-details
              placeholder="اختر الفرز"
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-sitemap </v-icon>
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
          <label for="FromDate">تاريخ التوريد (من)</label>
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
          <label for="ToDate">تاريخ التوريد (الي)</label>
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
import { productStore } from "@/stores/products/products.js";
import { storeToRefs } from "pinia";
import moment from "moment";

// Init Store
const granaryModule = granaryStore();
const productsModule = productStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);
const { products } = storeToRefs(productsModule);

// Local Data
const data = ref({
  granaryId: null,
  creationFromDate: null,
  creationToDate: null,
  FromDate: null,
  productId: null,
  productTypeId: null,
  ToDate: null,
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Computed
const productTypes = computed(() => {
  if (data.value.productId) return data.value.productId.typePriceList;
  return [];
});

// Methods
const submitFilter = () => {
  const obj = {
    granaryId: data.value.granaryId,
    productId: data.value.productId ? data.value.productId.id : null,
    productTypeId: data.value.productTypeId
      ? data.value.productTypeId.id
      : null,
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
  productsModule.doGetProducts(0, 10000);
});
</script>
