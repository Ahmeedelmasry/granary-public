<template>
  <div
    class="login_fields w-100"
    :style="`display: flex;
      align-items: center;
      height: 100%;
      ${smAndDown ? 'min-height: 95vh;' : ''}`"
  >
    <v-form class="w-100" @submit.prevent="signIn">
      <v-row dir="rtl">
        <v-col cols="12" class="ps-7 pe-10">
          <h2 style="font-weight: 900">تسجيل الدخول</h2>
        </v-col>
        <v-col cols="12" class="ps-7 pe-10">
          <div class="field_container">
            <label for="username">اسم المستخدم</label>
            <div class="input_parent position-relative">
              <input
                type="text"
                placeholder="اسم المستخدم"
                name="username"
                id="username"
                v-model="formData.username"
                class="w-100"
                style="padding-top: 12px; padding-bottom: 12px"
                :class="
                  $v.$errors.find((el) => el.$property == 'username')
                    ? 'err_field'
                    : ''
                "
              />
              <v-icon class="position-absolute">mdi-rename-outline</v-icon>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'username')"
            >
              {{ $v.$errors.find((el) => el.$property == "username").$message }}
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="ps-7 pe-10">
          <div class="field_container">
            <label for="userPass">كلمة المرور</label>
            <div class="input_parent position-relative">
              <input
                placeholder="كلمة المرور"
                name="userPass"
                id="userPass"
                class="w-100"
                type="password"
                v-model="formData.password"
                style="padding-top: 12px; padding-bottom: 12px"
                :class="
                  $v.$errors.find((el) => el.$property == 'password')
                    ? 'err_field'
                    : ''
                "
              />
              <v-icon class="position-absolute">mdi-lock-outline</v-icon>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'password')"
            >
              {{ $v.$errors.find((el) => el.$property == "password").$message }}
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="ps-7 pe-10">
          <v-btn
            width="100%"
            color="orange-darken-3"
            height="45"
            :loading="loading"
            type="submit"
            >تسجيل دخول</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { authStore } from "@/stores/auth/auth";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";
import { storeToRefs } from "pinia";

// Init Store
const loginStore = authStore();

const { smAndDown } = useDisplay();

// Data
const formData = ref({
  username: "abdoSalah",
  password: "150150",
});

const { loggerData, token } = storeToRefs(loginStore);

const roles = ref({
  username: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    minLength: helpers.withMessage(
      "يجب ان يحتوي اسم المستخدم علي 3 احرف او اكثر",
      minLength(3)
    ),
  },
  password: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    minLength: helpers.withMessage(
      "يجب ان يحتوي رمز المرور علي 3 احرف او اكثر",
      minLength(3)
    ),
  },
});

const loading = ref(false);

// Methods
let $v = useVuelidator(roles, formData);

const signIn = async () => {
  const res = await $v.value.$validate();
  if (res) {
    loading.value = true;
    const result = await loginStore.doLogin(formData.value);
    loading.value = false;
    if (result) {
      useCookie("logger", {
        maxAge: loggerData.value.exp,
      }).value = token.value;
      useRouter().push({ name: "index" });
    }
  }
};
</script>
