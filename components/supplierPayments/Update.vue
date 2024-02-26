<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل بيانات السداد" : "ادخال سداد جديد" }}
        </v-card-title>
        <v-form class="px-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اختر المورد</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      item-title="name"
                      item-value="id"
                      :items="suppliers.content"
                      return-object
                      transition="slide-y-transition"
                      variant="outlined"
                      placeholder="اختر المورد"
                      hide-details
                      @update:model-value="
                        supplierFound ? (supplierFound = false) : false
                      "
                      v-model="searchForm.supplier"
                      :class="
                        $v_search.$errors.find(
                          (el) => el.$property == 'supplier'
                        )
                          ? 'err_field'
                          : ''
                      "
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-store-24-hour</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v_search.$errors.find((el) => el.$property == 'supplier')
                  "
                >
                  {{
                    $v_search.$errors.find((el) => el.$property == "supplier")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اختر الصومعة</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      item-title="name"
                      item-value="id"
                      :items="granaries.content"
                      return-object
                      transition="slide-y-transition"
                      variant="outlined"
                      placeholder="اختر الصومعة"
                      hide-details
                      v-model="searchForm.granary"
                      @update:model-value="
                        supplierFound ? (supplierFound = false) : false
                      "
                      :class="
                        $v_search.$errors.find(
                          (el) => el.$property == 'granary'
                        )
                          ? 'err_field'
                          : ''
                      "
                    ></v-autocomplete>
                    <v-icon class="position-absolute"
                      >mdi-account-cowboy-hat</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v_search.$errors.find((el) => el.$property == 'granary')
                  "
                >
                  {{
                    $v_search.$errors.find((el) => el.$property == "granary")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" v-if="!supplierFound">
                <div class="text-center">
                  <v-btn
                    color="blue"
                    width="100"
                    class="mr-3"
                    :loading="searchLoading"
                    @click="searchSupplier"
                    >بحث</v-btn
                  >
                  <v-btn
                    color="red"
                    width="100"
                    class="mr-3"
                    :disabled="searchLoading"
                    @click="dialog = false"
                    >الغاء</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="12" md="6" v-if="supplierFound">
                <div class="field_container">
                  <label for="typeName">القيمة المستحقة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      :value="supplierInvoice"
                      placeholder="القيمة المستحقة"
                      name="typeName"
                      id="typeName"
                      readonly
                    />
                    <v-icon class="position-absolute">mdi-currency-usd</v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" v-if="supplierFound">
                <div class="field_container">
                  <label for="typeName">قيمة السداد</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.amount"
                      placeholder="قيمة السداد"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'amount')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'amount')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "amount").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" v-if="supplierFound">
                <div class="field_container">
                  <label for="typeName">تاريخ السداد</label>
                  <div class="input_parent position-relative">
                    <input
                      type="datetime-local"
                      name="insertDate"
                      id="insertDate"
                      :class="
                        $v.$errors.find((el) => el.$property == 'date')
                          ? 'err_field'
                          : ''
                      "
                      style="padding-right: 0 !important"
                      v-model="data.date"
                    />
                    <v-icon class="position-absolute"
                      >mdi-calendar-outline</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'date')"
                >
                  {{ $v.$errors.find((el) => el.$property == "date").$message }}
                </span>
              </v-col>
              <v-col cols="12" v-if="supplierFound">
                <div class="field_container">
                  <label for="typeName">ملاحظات <span>(اختياري)</span></label>
                  <div class="input_parent position-relative">
                    <textarea
                      type="text"
                      v-model="data.notes"
                      placeholder="ملاحظات"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'notes')
                          ? 'err_field'
                          : ''
                      "
                      style="resize: none"
                      rows="4"
                    ></textarea>
                    <v-icon class="position-absolute" style="top: 22px"
                      >mdi-note-edit-outline</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'notes')"
                  >notes
                  {{
                    $v.$errors.find((el) => el.$property == "notes").$message
                  }}
                </span>
              </v-col>
            </v-row>
          </v-container>
          <div class="actions text-center mb-7" v-if="supplierFound">
            <v-btn
              color="red"
              class="mr-3"
              @click="dialog = false"
              :disabled="btnLoading"
              width="100"
              >الغاء</v-btn
            >
            <v-btn color="green" type="submit" width="100" :loading="btnLoading"
              >حفظ</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { supplierPaymentsStore } from "@/stores/supplier_payments/supplier_payments.js";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, numeric, between } from "@vuelidate/validators";
import { granaryStore } from "@/stores/granary/granary";
import { supplierStore } from "@/stores/supplier/supplier";
import { storeToRefs } from "pinia";
import moment from "moment";

// Init STores
const suppliersPaymentsModule = supplierPaymentsStore();
const granaryModule = granaryStore();
const supplierModule = supplierStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);
const { supplierInvoice } = storeToRefs(suppliersPaymentsModule);
const { suppliers } = storeToRefs(supplierModule);

// Local Data
const searchForm = ref({
  supplier: null,
  granary: null,
});

const supplierFound = ref(false);

const data = ref({
  amount: null,
  date: null,
  notes: null,
});

const dialog = ref(false);
const btnLoading = ref(false);
const searchLoading = ref(false);

const roles = ref({
  amount: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    minLength: helpers.withMessage(
      "هذا الحقل يجب ان تكون قيمته بين 0.1 و 10000000000",
      between(0.1, 1000000000)
    ),
  },
  date: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
});

const searchRoles = ref({
  supplier: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
  granary: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
});

// Props
const props = defineProps(["openPopup", "toUpdate", "suppliers", "granaries"]);

// emits
const emits = defineEmits(["closePopup", "regetData"]);

// Watchers
watch(
  () => dialog.value,
  (newval) => {
    if (!newval) {
      setTimeout(() => {
        emits("closePopup");
      }, 200);
    }
  }
);

// Methods
let $v = useVuelidator(roles, data);
let $v_search = useVuelidator(searchRoles, searchForm);

const submitData = async () => {
  if (props.toUpdate) {
    roles.value.image = {};
    $v = useVuelidator(roles, data);
  }
  const res = await $v.value.$validate();
  if (res) {
    btnLoading.value = true;
    const obj = {
      supplier: {
        id: searchForm.value.supplier.id,
      },
      granary: {
        id: searchForm.value.granary.id,
      },
      due: Number(supplierInvoice.value),
      paid: Number(data.value.amount),
      remain: Number(supplierInvoice.value) - Number(data.value.amount),
      date: moment(new Date(data.value.date)).format("DD-MM-YYYY hh:mm:ss"),
      notes: data.value.notes,
    };
    const result = await suppliersPaymentsModule.doAddPayment(obj);
    if (result) {
      emits("regetData");
      dialog.value = false;
    }

    btnLoading.value = false;
  }
};

const searchSupplier = async () => {
  const res = await $v_search.value.$validate();
  if (res) {
    searchLoading.value = true;
    const result = await suppliersPaymentsModule.doGetSupplierFinance(
      searchForm.value.supplier.id,
      searchForm.value.granary.id
    );
    searchLoading.value = false;
    if (result) {
      supplierFound.value = true;
    }
  }
};

// Hooks
onMounted(() => {
  granaryModule.doGetGranaries(0, 10000);
  supplierModule.doGetSuppliers(0, 10000);
  dialog.value = props.openPopup;
  if (props.toUpdate) {
    data.value.supplier = props.toUpdate.selectable.supplier;
    data.value.granary = props.toUpdate.selectable.granary;
    data.value.amount = props.toUpdate.selectable.amount;
    data.value.notes = props.toUpdate.selectable.notes;
    data.value.date = props.toUpdate.selectable.date
      .split(":")
      .slice(0, 2)
      .join(":");
  }
});
</script>
