<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3">
        <div class="field_container">
          <label for="supplierId">اختر المورد</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="name"
              autocomplete="off"
              item-value="id"
              :items="suppliers.content"
              transition="slide-y-transition"
              variant="outlined"
              hide-details
              v-model="data.supplierId"
              auto-select-first
              return-object
              :disabled="loading"
              placeholder="اختر المورد"
              name="supplier"
              id="supplier"
              :custom-filter="
                (item, text, obj) => {
                  return (
                    obj.title.toString().includes(text) ||
                    obj.value.id.toString().includes(text)
                  );
                }
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
      <v-col cols="12" sm="6" md="4" lg="3" v-if="admin">
        <div class="field_container">
          <label for="granaryId">اختر الصومعة</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="name"
              autocomplete="off"
              item-value="id"
              return-object
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
          <label for="FromDate">من</label>
          <div class="input_parent position-relative">
            <flat-pickr
              name="date_from"
              id="date_from"
              v-model="data.creationFromDate"
              :config="config"
              placeholder="سنة/يوم/شهر"
            />
            <v-icon class="position-absolute" style="z-index: -1"
              >mdi-calendar</v-icon
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <div class="field_container" dir="rtl">
          <label for="ToDate">الي</label>
          <div class="input_parent position-relative">
            <flat-pickr
              name="date_from"
              id="date_from"
              v-model="data.creationToDate"
              :config="config"
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
import { authStore } from "@/stores/auth/auth";
import flatPickr from "vue-flatpickr-component";
import { Arabic } from "flatpickr/dist/l10n/ar.js";

// Validator
import useVuelidator from "@vuelidate/core";
import { requiredIf, helpers } from "@vuelidate/validators";

// Init Store
const granaryModule = granaryStore();
const supplierModule = supplierStore();
const authModule = authStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);
const { suppliers } = storeToRefs(supplierModule);
const { loggerData } = storeToRefs(authModule);

const admin = computed(() => {
  return loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

// Local Data
const data = ref({
  supplierId: null,
  granaryId: null,
  creationFromDate: null,
  creationToDate: null,
  FromDate: null,
  ToDate: null,
});

const config = ref({
  wrap: true,
  altFormat: "d/m/Y",
  altInput: true,
  dateFormat: "d/m/Y",
  enabled: true,
  locale: Arabic,
});

const roles = computed(() => {
  return {
    granaryId: {
      required: helpers.withMessage("هذا الحقل مطلوب", requiredIf(admin.value)),
    },
  };
});

let $v = useVuelidator(roles, data);

// Props
const props = defineProps(["loading"]);

// Emits
const emits = defineEmits(["filterData"]);

// Methods
const submitFilter = async () => {
  const res = await $v.value.$validate();
  if (res) {
    const obj = {
      supplierId: data.value.supplierId,
      granaryId: data.value.granaryId,
      creationFromDate: data.value.creationFromDate
        ? data.value.creationFromDate
        : null,
      creationToDate: data.value.creationToDate
        ? data.value.creationToDate
        : null,
      // FromDate: data.value.FromDate
      //   ? moment(data.value.FromDate).format("DD/MM/YYYY")
      //   : null,
      // ToDate: data.value.ToDate
      //   ? moment(data.value.ToDate).format("DD/MM/YYYY")
      //   : null,
    };
    supplierChange(obj);
    emits("filterData", obj);
  }
};

// Injects
const supplierChange = inject("supplierSelect");

onMounted(() => {
  granaryModule.doGetGranaries(0, 10000);
  supplierModule.doGetSuppliers(0, 10000);
});
</script>
