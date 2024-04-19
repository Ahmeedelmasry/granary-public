<template>
  <div class="pay_client_due">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card class="pb-5" max-height="90vh">
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          اضافة سدادات جديدة
        </v-card-title>
        <v-table class="text-center w-100" v-if="selected && selected.length">
          <thead>
            <tr>
              <th
                style="background-color: #f3f3f3 !important"
                class="text-center font-weight-bold"
              >
                تاريخ
              </th>
              <th
                style="background-color: #f3f3f3 !important"
                class="text-center font-weight-bold"
              >
                المبلغ المتبقي
              </th>
              <th
                style="background-color: #f3f3f3 !important"
                class="text-center font-weight-bold"
              >
                حالة الدفع
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, i) in selected" :key="item.id">
            <tr>
              <td style="font-size: 15px">{{ item.date }}</td>
              <td style="font-size: 15px">{{ item.remaining.toFixed(2) }}</td>
              <td style="font-size: 15px">
                <v-chip color="green" v-if="item.isFullPayed">مكتمل</v-chip>
                <v-chip color="red" v-if="!item.isFullPayed">غير مكتمل</v-chip>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="pt-5">
              <td style="font-weight: bold; font-size: 18px">الاجمالي</td>
              <td style="font-weight: bold; font-size: 18px">
                {{ totalDues.toFixed(2) }}
              </td>
              <td></td>
            </tr>
            <tr style="background-color: white !important">
              <td></td>
              <td>
                <div class="field_container pt-5">
                  <div class="input_parent">
                    <input autocomplete="off"
                      class="px-0 text-center"
                      style="width: 100%"
                      placeholder="قم بادخال مبلغ السداد"
                      type="text"
                      v-model="data.paymentAmount"
                      :class="
                        $v.$errors.find((el) => el.$property == 'paymentAmount')
                          ? 'err_field'
                          : ''
                      "
                    />
                  </div>
                  <span
                    class="err_msg pt-2 d-block mb-0 pb-0"
                    v-if="
                      $v.$errors.find((el) => el.$property == 'paymentAmount')
                    "
                  >
                    {{
                      $v.$errors.find((el) => el.$property == "paymentAmount")
                        .$message
                    }}
                  </span>
                </div>
              </td>
              <td>
                <v-radio-group v-model="data.transactionType" inline class="mt-9">
                  <v-radio
                    label="تحويل بنكي"
                    class="mr-2"
                    value="تحويل بنكي"
                  ></v-radio>
                  <v-radio label="شيك" value="شيك"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tfoot>
        </v-table>
        <div class="field_container">
          <div class="input_parent px-5 text-end">
            <label for="">اضافة ملاحظة</label>
            <textarea
              class="px-5 text-end"
              style="width: 100%; resize: none"
              placeholder="اضافة ملاحظة"
              type="text"
              v-model="data.notes"
              :rows="5"
            ></textarea>
          </div>
        </div>
        <div class="actions text-center mt-5">
          <v-btn
            color="green"
            @click="submitData"
            :loading="btnLoading"
            width="100"
            >دفع</v-btn
          >
          <v-btn
            color="red"
            class="ml-3"
            @click="dialog = false"
            width="100"
            :disabled="btnLoading"
            >الغاء</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, between, numeric } from "@vuelidate/validators";
import { clientStore } from "@/stores/clients/clients.js";

// Init Store
const clientModule = clientStore();

// Local Data
const data = ref({
  paymentAmount: null,
  transactionType: "تحويل بنكي",
  notes: null,
});

const dialog = ref(false);
const btnLoading = ref(false);

// Computed
const totalDues = computed(() => {
  let totals = 0;
  if (props.selected && props.selected.length) {
    props.selected.forEach((el) => (totals += el.remaining));
  }
  return totals;
});

const roles = computed(() => {
  return {
    paymentAmount: {
      required: helpers.withMessage("هذا الحقل مطلوب", required),
      numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
      between: helpers.withMessage(
        `قم بادخال رقم بين 1 و ${totalDues.value}`,
        between(1, totalDues.value)
      ),
    },
  };
});

// Methods
const $v = useVuelidator(roles, data);

const submitData = async () => {
  const res = await $v.value.$validate();
  if (res) {
    const obj = {
      amountToPay: data.value.paymentAmount,
      duesDTOList: props.selected,
      granary: {
        id: props.selectedGranary,
      },
      transactionType: data.value.transactionType,
      notes: data.value.notes,
    };
    btnLoading.value = true;
    const result = await clientModule.doPayClients(obj);
    btnLoading.value = false;
    if (result) {
      emits("regetData");
      dialog.value = false;
    }
  }
};

// Props
const props = defineProps(["openPopup", "selected", "selectedGranary"]);

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

// Hooks
onMounted(() => {
  dialog.value = props.openPopup;
});
</script>
