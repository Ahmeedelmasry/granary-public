<template>
  <div
    class="login_fields w-100"
    style="display: flex; align-items: center; height: 100%"
  >
    <v-form class="w-100">
      <v-row dir="rtl">
        <v-col cols="12" class="ps-7 pe-10">
          <h2 style="font-weight: 900">تسجيل الدخول</h2>
        </v-col>
        <v-col cols="12" class="ps-7 pe-10">
          <div class="field_container">
            <label for="userName">اسم المستخدم</label>
            <div class="input_parent position-relative">
              <input
                type="text"
                placeholder="اسم المستخدم"
                name="userName"
                id="userName"
                v-model="formData.userName"
                class="w-100"
                style="padding-top: 12px; padding-bottom: 12px"
              />
              <v-icon class="position-absolute">mdi-rename-outline</v-icon>
            </div>
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
              />
              <v-icon class="position-absolute">mdi-lock-outline</v-icon>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="ps-7 pe-10">
          <v-btn
            width="100%"
            color="orange-darken-3"
            height="45"
            @click="signIn"
            >تسجيل دخول</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
// Cookie
const logger = useCookie("logger");
// Data
const formData = ref({
  userName: "ahmedelmasry",
  password: "123456",
});

// Methods
const signIn = () => {
  if (
    formData.value.userName == "ahmedelmasry" &&
    formData.value.password == "123456"
  ) {
    logger.value = { name: "Ahmed Elmasry" };
    setTimeout(() => {
      useRouter().push({ name: "index" });
    }, 200);
  }
};
</script>
