<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="1000">
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
                    <input autocomplete="off"
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
                    <input autocomplete="off"
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
                    <input autocomplete="off"
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
                    <input autocomplete="off"
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

              <v-col cols="12" md="6" lg="">
                <div class="field_container">
                  <label for="granary">دور المستخدم</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      :items="createUserRoles"
                      item-title="name"
                      variant="outlined"
                      placeholder="دور المستخدم"
                      id="userRole"
                      v-model="data.role"
                      hide-details
                      :class="[
                        $v.$errors.find((el) => el.$property == 'role')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-account</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'granary')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "granary").$message
                  }}
                </span>
              </v-col>

              <v-col cols="12" md="6" lg="" v-if="data.role != 'ADMIN'">
                <div class="field_container">
                  <label for="granary">الصومعة</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      :items="granaries.content"
                      item-title="name"
                      item-value="id"
                      variant="outlined"
                      multiple
                      placeholder="اختر الصومعة"
                      id="granary"
                      v-model="data.granaries"
                      chips
                      hide-details
                      :class="[
                        $v.$errors.find((el) => el.$property == 'granaries')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-store-24-hour</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'granaries')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "granaries")
                      .$message
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
                  >
                    <v-row class="align-center">
                      <v-col cols="3">
                        {{ roleObj.title }}
                      </v-col>
                      <v-col cols="6"></v-col>
                      <v-col cols="3">
                        <v-checkbox
                          label="الكل"
                          :value="true"
                          v-model="roleObj.selectAll"
                          :disabled="data.role == 'ADMIN'"
                          hide-details
                          @update:model-value="selectAll(roleObj)"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-card-title>
                  <div class="d-flex flex-wrap">
                    <v-checkbox
                      :label="val.name"
                      v-for="(val, key, j) in roleObj.obj"
                      :key="j"
                      :value="true"
                      v-model="val.value"
                      :disabled="data.role == 'ADMIN'"
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
import { granaryStore } from "@/stores/granary/granary.js";
import { userStore } from "@/stores/users/users.js";
import { userRoles } from "@/stores/users/roles";

// Validator
import useVuelidator from "@vuelidate/core";

import {
  required,
  helpers,
  minLength,
  maxLength,
  requiredUnless,
} from "@vuelidate/validators";

import { storeToRefs } from "pinia";

// Init STores
const rolesModule = userRoles();
const granaryModule = granaryStore();
const userModule = userStore();

// Local Data
const { the_user_roles } = storeToRefs(rolesModule);
const { granaries } = storeToRefs(granaryModule);

const data = ref({
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  role: "",
  granaries: [],
  isLocked: false,
});
const dialog = ref(false);
const btnLoading = ref(false);

const createUserRoles = ref([
  {
    name: "مسؤول",
    value: "ADMIN",
  },
  {
    name: "مشرف",
    value: "USER",
  },
]);

const roles = computed(() => {
  return {
    username: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
    firstName: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
    lastName: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
    role: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
    password: {
      required: helpers.withMessage("هذا الحقل مطلوب", required),
      minLength: helpers.withMessage(
        "هذا الحقل يجب ان يتكون من 6 رقم",
        minLength(6)
      ),
      maxLength: helpers.withMessage(
        "هذا الحقل يجب ان يتكون من 20 رقم",
        maxLength(20)
      ),
    },
    granaries: {
      requiredUnless: helpers.withMessage(
        "هذا الحقل مطلوب",
        requiredUnless(data.value.role == "ADMIN")
      ),
    },
  };
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

watch(
  () => data.value.role,
  (newVal) => {
    if (newVal == "ADMIN") {
      updateRolesStatus(true);
      data.granaries = [];
    } else {
      updateRolesStatus(false);
    }
  }
);

watch(
  () => the_user_roles.value,
  (newVal) => {
    for (const val of Object.entries(newVal)) {
      let unchecked;
      secondLoop: for (const val_2 of Object.entries(val[1].obj)) {
        if (!val_2[1].value) {
          unchecked = true;
          break secondLoop;
        }
      }
      if (unchecked) {
        val[1].selectAll = false;
      } else {
        val[1].selectAll = true;
      }
    }
  },
  { deep: true }
);

// Methods
const updateRolesStatus = (value) => {
  for (const val of Object.entries(the_user_roles.value)) {
    for (const val_2 of Object.entries(val[1].obj)) {
      val_2[1].value = value;
    }
  }
};

const selectAll = (obj) => {
  for (const val of Object.entries(obj.obj)) {
    val[1].value = obj.selectAll ? true : false;
  }
};

let $v = useVuelidator(roles, data);
const submitData = async () => {
  if (props.toUpdate) {
    roles.value.image = {};
    $v = useVuelidator(roles, data);
  }
  const res = await $v.value.$validate();
  if (res) {
    btnLoading.value = true;
    const obj = { ...data.value };
    obj.granaries = data.value.granaries.map(
      (el) =>
        (el = {
          id: el,
        })
    );
    obj.authorities = [obj.role];
    if (obj.role != "ADMIN") {
      obj.authorities = [];

      for (const val of Object.entries(the_user_roles.value)) {
        for (const val_2 of Object.entries(val[1].obj)) {
          if (val_2[1].value) {
            obj.authorities.push(
              `${val[0] ? `${val[0]}_${val_2[0]}` : `${val_2[0]}`}`
            );
          }
        }
      }
      obj.authorities.push("LOOKUPS");
    }

    delete obj.role;

    if (props.toUpdate) {
      // const result = await supplierModule.doUpdateSupplier({
      //   id: props.toUpdate.selectable.id,
      //   name: data.value.name,
      //   phone: data.value.phone,
      //   nationalid: data.value.nationalid,
      //   isLocked: false,
      // });
      // if (result) {
      //   emits("regetData");
      //   dialog.value = false;
      // }
    } else {
      const result = await userModule.doAddUser(obj);
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
  granaryModule.doGetGranaries(0, 1000);
  if (props.toUpdate) {
    data.value.name = props.toUpdate.selectable.name;
    data.value.phone = props.toUpdate.selectable.phone;
    data.value.nationalid = props.toUpdate.selectable.nationalid;
  }
});
</script>
