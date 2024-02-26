<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3">
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
              :class="
                $v.$errors.find((el) => el.$property == 'supplierId')
                  ? 'err_field'
                  : ''
              "
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-account-cowboy-hat</v-icon>
          </div>
          <span
            class="err_msg"
            v-if="$v.$errors.find((el) => el.$property == 'supplierId')"
          >
            {{ $v.$errors.find((el) => el.$property == "supplierId").$message }}
          </span>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
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
              :class="
                $v.$errors.find((el) => el.$property == 'granaryId')
                  ? 'err_field'
                  : ''
              "
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-store-24-hour</v-icon>
          </div>
          <span
            class="err_msg"
            v-if="$v.$errors.find((el) => el.$property == 'granaryId')"
          >
            {{ $v.$errors.find((el) => el.$property == "granaryId").$message }}
          </span>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <div class="field_container" dir="rtl">
          <label for="FromDate">تاريخ (من)</label>
          <div class="input_parent position-relative">
            <input
              type="datetime-local"
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
      <v-col cols="12" sm="6" md="4" lg="3">
        <div class="field_container" dir="rtl">
          <label for="ToDate">تاريخ (الي)</label>
          <div class="input_parent position-relative">
            <input
              type="datetime-local"
              name="ToDate"
              v-model="data.ToDate"
              :disabled="loading"
              id="ToDate"
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
        style="display: flex; align-items: flex-end"
        class="pt-0"
      >
        <v-btn
          color="blue"
          width="100"
          height="40"
          elevation="0"
          @click="submitFilter"
          class="font-weight-bold"
          style="margin-bottom: 2px"
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

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

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

const roles = ref({
  supplierId: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
  granaryId: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
});

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

let $v = useVuelidator(roles, data);

// Methods
const submitFilter = async () => {
  const res = await $v.value.$validate();
  if (res) {
    const obj = {
      supplierId: data.value.supplierId,
      granaryId: data.value.granaryId,
      creationFromDate: data.value.creationFromDate
        ? moment(data.value.creationFromDate).format("DD/MM/YYYY")
        : null,
      creationToDate: data.value.creationToDate
        ? moment(data.value.creationToDate).format("DD/MM/YYYY")
        : null,
      FromDate: data.value.FromDate
        ? moment(data.value.FromDate).format("DD/MM/YYYY")
        : null,
      ToDate: data.value.ToDate
        ? moment(data.value.ToDate).format("DD/MM/YYYY")
        : null,
    };
    emits("filterData", obj);
  }
};

onMounted(() => {
  granaryModule.doGetGranaries(0, 10000);
  supplierModule.doGetSuppliers(0, 10000);
});
</script>
