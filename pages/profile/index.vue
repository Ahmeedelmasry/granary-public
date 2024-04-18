<template>
  <div class="profile">
    <div class="page_toolbar d-flex align-center justify-end">
      <v-breadcrumbs :items="items" dir="rtl" class="pa-0 mb">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
    <form action="" class="w-75 mx-auto pt-7" @submit.prevent="submitForm">
      <v-container>
        <v-row dir="rtl">
          <v-col cols="6">
            <div class="field_container">
              <label for="userName">اسم المستخدم</label>
              <div class="input_parent position-relative">
                <input autocomplete="off"
                  type="text"
                  placeholder="اسم المستخدم"
                  name="userName"
                  id="userName"
                  v-model="data.userName"
                  disabled
                />
                <v-icon class="position-absolute" size="18">mdi-pencil </v-icon>
              </div>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'userName')"
            >
              {{ $v.$errors.find((el) => el.$property == "userName").$message }}
            </span>
          </v-col>
          <v-col cols="6">
            <div class="field_container">
              <label for="firstName">الاسم الاول</label>
              <div class="input_parent position-relative">
                <input autocomplete="off"
                  type="text"
                  placeholder="الاسم الاول"
                  v-model="data.firstName"
                  name="firstName"
                  id="firstName"
                  :class="
                    $v.$errors.find((el) => el.$property == 'firstName')
                      ? 'err_field'
                      : ''
                  "
                  :disabled="!enableEdit"
                />
                <v-icon class="position-absolute" size="18">mdi-pencil </v-icon>
              </div>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'firstName')"
            >
              {{
                $v.$errors.find((el) => el.$property == "firstName").$message
              }}
            </span>
          </v-col>
          <v-col cols="6">
            <div class="field_container">
              <label for="lastName">اسم العائلة</label>
              <div class="input_parent position-relative">
                <input autocomplete="off"
                  type="text"
                  placeholder="اسم العائلة"
                  name="lastName"
                  v-model="data.lastName"
                  id="lastName"
                  :disabled="!enableEdit"
                  :class="
                    $v.$errors.find((el) => el.$property == 'lastName')
                      ? 'err_field'
                      : ''
                  "
                />
                <v-icon class="position-absolute" size="18">mdi-pencil </v-icon>
              </div>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'lastName')"
            >
              {{ $v.$errors.find((el) => el.$property == "lastName").$message }}
            </span>
          </v-col>
          <v-col cols="6">
            <div class="field_container">
              <label for="password">رمز المرور</label>
              <div class="input_parent position-relative">
                <input autocomplete="off"
                  type="text"
                  placeholder="رمز المرور"
                  name="password"
                  v-model="data.password"
                  id="password"
                  :disabled="!enableEdit"
                  :class="
                    $v.$errors.find((el) => el.$property == 'password')
                      ? 'err_field'
                      : ''
                  "
                />
                <v-icon class="position-absolute" size="18">mdi-pencil </v-icon>
              </div>
            </div>
            <span
              class="err_msg"
              v-if="$v.$errors.find((el) => el.$property == 'password')"
            >
              {{ $v.$errors.find((el) => el.$property == "password").$message }}
            </span>
          </v-col>
          <v-col cols="12" class="mt-5 text-center">
            <v-btn
              width="160"
              rounded="lg"
              color="blue"
              elevation="0"
              v-if="!enableEdit"
              @click="enableEdit = true"
              >تعديل</v-btn
            >
            <v-btn
              width="160"
              rounded="lg"
              color="green"
              elevation="0"
              v-if="enableEdit"
              type="submit"
              :loading="loading"
              >حفظ</v-btn
            >
            <v-btn
              width="160"
              rounded="lg"
              color="red"
              elevation="0"
              v-if="enableEdit"
              class="ms-4"
              @click="enableEdit = false"
              >الغاء</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<script setup>
import { authStore } from "@/stores/auth/auth";
import { userStore } from "@/stores/users/users.js";
import { storeToRefs } from "pinia";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";

const enableEdit = ref(false);
const loading = ref(false);

const data = ref({
  userName: "",
  firstName: "",
  lastName: "",
  password: "",
});

const roles = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage("هذا الحقل مطلوب", required),
    },
    lastName: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
    password: {
      minLength: helpers.withMessage(
        "قم بادخال رمز اكبر من 6 حروف",
        minLength(6)
      ),
    },
  };
});

const items = [
  {
    title: "الرئيسية",
    disabled: false,
    to: {
      name: "index",
    },
  },
  {
    title: "الصفحة الشخصية",
    disabled: true,
  },
];

const { loggerData } = storeToRefs(authStore());

let $v = useVuelidator(roles, data);

const submitForm = async () => {
  const res = await $v.value.$validate();
  if (res) {
    loading.value = true;
    const obj = { ...data.value, id: loggerData.value.DD };
    if (!obj.password) delete obj.password;
    delete obj.userName;
    await userStore().updateUser(obj);
    loading.value = false;
    useCookie("logger", {
      maxAge: 1,
    }).value = null;
    setTimeout(() => {
      useRouter().push({ name: "signin" });
    }, 1000);
  }
};

onMounted(() => {
  data.value.userName = loggerData.value.sub;
  data.value.firstName = loggerData.value.firstName;
  data.value.lastName = loggerData.value.lastName;
});
</script>
