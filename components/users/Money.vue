<template>
  <div class="add_money">
    <v-dialog v-model="dialog" width="600">
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold"
          style="font-size: 22px"
        >
          اضافة عهدة
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12">
                <div class="field_container">
                  <label for="typeName">اسم المستخدم</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="username"
                      name="typeName"
                      id="typeName"
                      style="padding-right: 10px"
                      disabled
                    />
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">العهدة الحالية</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="currentAmount"
                      name="typeName"
                      id="typeName"
                      style="padding-right: 10px"
                      disabled
                    />
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">قيمة التحويل</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.custody"
                      placeholder="قيمة التحويل"
                      name="custody"
                      id="custody"
                      :class="
                        $v.$errors.find((el) => el.$property == 'custody')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-currency-usd</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'custody')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "custody").$message
                  }}
                </span>
              </v-col>
            </v-row>
          </v-container>
          <div class="actions text-center">
            <v-btn
              color="red"
              class="mr-3"
              @click="dialog = false"
              :disabled="btnLoading"
              >الغاء</v-btn
            >
            <v-btn color="green" type="submit" :loading="btnLoading">حفظ</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/users/users";
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, numeric, between } from "@vuelidate/validators";

// Init Store
const authModule = authStore();
const { loggerData } = storeToRefs(authModule);

const username = ref('');
const currentAmount = ref(0);

const data = ref({
  custody: 1,
  userId: null,
  adminId: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = computed(() => {
  return {
    custody: {
      required: helpers.withMessage("هذا الحقل مطلوب", required),
      numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
      between: helpers.withMessage("ادخل قيمة اكبر من صفر", between(1,1000000)),
    },
  };
});

// Props
const props = defineProps(["openPopup", "user"]);

// emits
const emits = defineEmits(["closePopup", "regetData"]);

let $v = useVuelidator(roles, data);

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
const submitData = async () => {
  const res = await $v.value.$validate();
  if (res) {
    btnLoading.value = true
    const result = await userStore().transferMoney(data.value);
    btnLoading.value = false
    if (result) {
      emits("regetData");
      dialog.value = false;
    }
  }
};

// Hooks
onMounted(() => {
  dialog.value = props.openPopup;
  username.value = props.user.userName;
  data.value.userId = props.user.id;
  currentAmount.value = props.user.custody;
  data.value.adminId = loggerData.value.DD;
});
</script>
