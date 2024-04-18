<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold"
          style="font-size: 22px"
        >
          الخزنة
        </v-card-title>
        <h3 class="text-center mt-7 text-h5">الرصيد الحالي</h3>
        <strong class="text-center text-h5 mt-2" v-if="!loading">{{
          parseInt(castody).toFixed(2)
        }}</strong>
        <div class="text-center mt-2" v-if="loading">
          <v-progress-circular
            color="blue"
            indeterminate
          ></v-progress-circular>
        </div>
        <v-divider class="mt-7"></v-divider>
        <v-divider class="mb-4"></v-divider>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold mt-7"
          style="font-size: 22px"
        >
          اضافة مصروفات
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12">
                <div class="field_container">
                  <label for="outingValue">قيمة المبلغ</label>
                  <div class="input_parent position-relative">
                    <input autocomplete="off"
                      type="text"
                      v-model="data.outingValue"
                      placeholder="قيمة المبلغ"
                      name="outingValue"
                      id="outingValue"
                      :class="
                        $v.$errors.find((el) => el.$property == 'outingValue')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'outingValue')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "outingValue")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12">
                <div class="field_container">
                  <label for="description">سبب الصرف</label>
                  <div class="input_parent position-relative">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      v-model="data.description"
                      rows="5"
                      style="resize: none"
                      :class="
                        $v.$errors.find((el) => el.$property == 'description')
                          ? 'err_field'
                          : ''
                      "
                    ></textarea>
                    <v-icon class="position-absolute" style="top: 20px"
                      >mdi-text</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'description')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "description")
                      .$message
                  }}
                </span>
              </v-col>
            </v-row>
          </v-container>
          <div class="actions text-center mt-5">
            <v-btn
              color="red"
              class="mr-3"
              @click="dialog = false"
              :disabled="btnLoading"
              >اغلاق</v-btn
            >
            <v-btn color="green" type="submit" :loading="btnLoading"
              >اضافة</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/users/users";
import { authStore } from "@/stores/auth/auth";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, between, numeric, helpers } from "@vuelidate/validators";
import { storeToRefs } from "pinia";

// Init STores
const usersModule = userStore();
const authModule = authStore();

const { loggerData } = storeToRefs(authModule);
const { castody } = storeToRefs(usersModule);

// Local Data
const data = ref({
  outingValue: 0,
  description: null,
});

const dialog = ref(false);
const btnLoading = ref(false);
const loading = ref(false);

const roles = ref({
  outingValue: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    between: helpers.withMessage(
      "قم بادخال قيمة اكبر من صفر",
      between(1, 1000000)
    ),
  },
  description: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
});

// Props
const props = defineProps(["openPopup", "toUpdate"]);

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
const submitData = async () => {
  if (props.toUpdate) {
    roles.value.image = {};
    $v = useVuelidator(roles, data);
  }
  const res = await $v.value.$validate();
  if (res) {
    btnLoading.value = true;
    const result = await usersModule.addPayment({
      user: { id: loggerData.value.DD },
      previousCustody: castody.value,
      outingValue: data.value.outingValue,
      description: data.value.description,
    });
    if (result) {
      dialog.value = false;
    }
    btnLoading.value = false;
  }
};

// Hooks
onMounted(async () => {
  dialog.value = props.openPopup;
  loading.value = true;
  await usersModule.getCastody(loggerData.value.DD);
  loading.value = false;
});
</script>
