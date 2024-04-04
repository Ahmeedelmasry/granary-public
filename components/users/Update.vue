<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="1000" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل مستخدم" : "اضافة مستخدم" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم المستخدم</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.username"
                      placeholder="اسم المستخدم"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'username')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-rename-outline</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'username')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "username").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">الاسم الاول</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.firstName"
                      placeholder="الاسم الاول"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'firstName')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-rename-outline</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'firstName')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "firstName")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم العائلة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.lastName"
                      placeholder="اسم العائلة"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'lastName')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-rename-outline</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'lastName')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "lastName").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">كلمة المرور</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.password"
                      placeholder="كلمة المرور"
                      name="phoneNum"
                      id="phoneNum"
                      :class="
                        $v.$errors.find((el) => el.$property == 'password')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-security</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'password')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "password").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12">
                <h3 class="text-center">الصلاحيات</h3>
              </v-col>
              <v-col
                cols="12"
                md="6"
                v-for="(roleObj, i) in the_user_roles"
                dir="ltr"
              >
                <v-card :key="i" class="px-0" elevation="0">
                  <v-card-title
                    style="
                      background-color: #f0f0f0 !important;
                      font-size: 18px;
                    "
                    >{{ roleObj.title }}</v-card-title
                  >
                  <div class="d-flex flex-wrap">
                    <v-checkbox
                      :label="val.name"
                      v-for="(val, key, j) in roleObj.obj"
                      :key="j"
                      :value="true"
                      v-model="val.value"
                      style="min-width: 150px"
                    ></v-checkbox>
                  </div>
                </v-card>
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
import { supplierStore } from "@/stores/supplier/supplier";
import { userRoles } from "@/stores/users/roles";

// Validator
import useVuelidator from "@vuelidate/core";
import {
  required,
  helpers,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";
import { storeToRefs } from "pinia";

// Init STores
const supplierModule = supplierStore();
const rolesModule = userRoles();

// Local Data
const { the_user_roles } = storeToRefs(rolesModule);
const data = ref({
  username: null,
  firstName: null,
  lastName: null,
  password: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  username: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  firstName: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  lastName: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  password: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    minLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 6 رقم",
      minLength(6)
    ),
    maxLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 20 رقم",
      maxLength(20)
    ),
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
    if (props.toUpdate) {
      const result = await supplierModule.doUpdateSupplier({
        id: props.toUpdate.selectable.id,
        name: data.value.name,
        phone: data.value.phone,
        nationalid: data.value.nationalid,
        isLocked: false,
      });

      if (result) {
        emits("regetData");
        dialog.value = false;
      }
    } else {
      const result = await supplierModule.doAddSupplier({
        name: data.value.name,
        phone: data.value.phone,
        nationalid: data.value.nationalid,
        isLocked: false,
      });
      if (result) {
        emits("regetData");
        dialog.value = false;
      }
    }
    btnLoading.value = false;
  }
};

// Hooks
onMounted(() => {
  dialog.value = props.openPopup;
  if (props.toUpdate) {
    data.value.name = props.toUpdate.selectable.name;
    data.value.phone = props.toUpdate.selectable.phone;
    data.value.nationalid = props.toUpdate.selectable.nationalid;
  }
});
</script>
