<template>
  <div class="clientPaymentReportFilter">
    <v-row dir="rtl" class="pt-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="pt-0">
        <div class="field_container">
          <label for="supplierId">اختر العميل</label>
          <div class="input_parent position-relative">
            <v-autocomplete
              item-title="client.name"
              item-value="client.id"
              :items="clientLockup"
              transition="slide-y-transition"
              variant="outlined"
              hide-details
              @update:model-value="data.granaryId = null"
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
              item-value="id"
              :items="getRelatedGranaries"
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
          <label for="ToDate">الي</label>
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
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3" class="py-0">
        <div>
          <v-radio-group v-model="data.transactionType" inline class="mt-3">
            <v-radio label="شيك" value="شيك"></v-radio>
            <v-radio
              label="تحويل بنكي"
              class="mr-2"
              value="تحويل بنكي"
              v-model="data.transactionType"
            ></v-radio>
            <v-radio label="الكل" :value="null"></v-radio>
          </v-radio-group>
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

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Init Store
const clientModule = clientStore();

// Store Data
const { clientLockup } = storeToRefs(clientModule);

// Local Data
const data = ref({
  clientID: null,
  granaryId: null,
  FromDate: null,
  ToDate: null,
  transactionType: null,
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
  if (data.value.clientID)
    return clientLockup.value.find((el) => el.client.id == data.value.clientID)
      .granaryList;
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
      transactionType: data.value.transactionType,
      granaryId: data.value.granaryId,
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
  clientModule.doGetClientsLockup();
});
</script>
