<template>
  <div class="supplierPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0">
        <div class="field_container">
          <label for="supplierId">اختر العميل</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="client.name"
              item-value="client.id"
              :items="clientLockup"
              autocomplete="off"
              transition="slide-y-transition"
              variant="outlined"
              hide-details
              v-model="data.clientID"
              placeholder="اختر العميل"
              :disabled="loading"
              :class="
                $v.$errors.find((el) => el.$property == 'clientID')
                  ? 'err_field'
                  : ''
              "
            ></v-autocomplete>
            <v-icon class="position-absolute">mdi-account-cowboy-hat</v-icon>
          </div>
          <span
            class="err_msg"
            v-if="$v.$errors.find((el) => el.$property == 'clientID')"
          >
            {{ $v.$errors.find((el) => el.$property == "clientID").$message }}
          </span>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container">
          <label for="granaryId">اختر الصومعة</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="name"
              autocomplete="off"
              item-value="id"
              :items="
                loggerData.authorities.find((el) => el.authority == 'ADMIN')
                  ? getRelatedGranaries.related
                  : getRelatedGranaries.userOnlyGranaryRelated
              "
              transition="slide-y-transition"
              variant="outlined"
              :disabled="loading"
              placeholder="اختر الصومعة"
              hide-details
              v-model="data.granaryId"
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
            v-if="$v.$errors.find((el) => el.$property == 'clientID')"
          >
            {{ $v.$errors.find((el) => el.$property == "clientID").$message }}
          </span>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container" dir="rtl">
          <label for="FromDate">من</label>
          <div class="input_parent position-relative">
            <flat-pickr
              name="date_from"
              id="date_from"
              v-model="data.FromDate"
              :config="config"
              placeholder="سنة/يوم/شهر"
            />
            <v-icon class="position-absolute">mdi-calendar</v-icon>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div class="field_container" dir="rtl">
          <label for="ToDate">الي</label>
          <div class="input_parent position-relative">
            <flat-pickr
              name="date_from"
              id="date_from"
              v-model="data.ToDate"
              :config="config"
              placeholder="سنة/يوم/شهر"
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
import { storeToRefs } from "pinia";
import moment from "moment";
import { clientStore } from "@/stores/clients/clients.js";
import { authStore } from "@/stores/auth/auth";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import flatPickr from "vue-flatpickr-component";
import { Arabic } from "flatpickr/dist/l10n/ar.js";

// Init Store
const clientModule = clientStore();
const authModule = authStore();

// Store Data
const { clientLockup } = storeToRefs(clientModule);
const { loggerData } = storeToRefs(authModule);

// Local Data
const data = ref({
  clientID: null,
  granaryId: null,
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

const roles = ref({
  clientID: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
  granaryId: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
});

// Props
const props = defineProps(["loading", "reFilter"]);

// Emits
const emits = defineEmits(["filterData", "refiltered"]);

let $v = useVuelidator(roles, data);

// Computed
const getRelatedGranaries = computed(() => {
  if (data.value.clientID) {
    const related = clientLockup.value.find(
      (el) => el.client.id == data.value.clientID
    ).granaryList;
    const userOnlyGranaryRelated = [];
    if (!loggerData.value.authorities.find((el) => el.authority == "ADMIN"))
      related.forEach((el) => {
        loggerData.value.granaries.forEach((granary) => {
          if (el.id == granary.id) {
            userOnlyGranaryRelated.push(el);
          }
        });
      });
    return { related, userOnlyGranaryRelated };
  }
  return [];
});

// Watchers
watch(
  () => props.reFilter,
  (newVal) => {
    if (newVal) {
      submitFilter();
      emits("refiltered");
    }
  }
);

// Methods
const submitFilter = async () => {
  const res = await $v.value.$validate();
  if (res) {
    const obj = {
      clientID: data.value.clientID,
      granaryId: data.value.granaryId,
      FromDate: data.value.FromDate ? data.value.FromDate : null,
      ToDate: data.value.ToDate
        ? moment(
            Date.now(new Date(data.value.ToDate)) + 24 * 60 * 60 * 1000
          ).format("DD/MM/YYYY")
        : null,
    };
    emits("filterData", obj);
  }
};

onMounted(() => {
  clientModule.doGetClientsLockup();
});
</script>
