<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-weight-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل مورد" : "اضافة مورد" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم المورد</label>
                  <div class="input_parent position-relative">
                    <input autocomplete="off"
                      type="text"
                      v-model="data.name"
                      placeholder="اسم المورد"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'name')
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
                  v-if="$v.$errors.find((el) => el.$property == 'name')"
                >
                  {{ $v.$errors.find((el) => el.$property == "name").$message }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">رقم الهاتف</label>
                  <div class="input_parent position-relative">
                    <input autocomplete="off"
                      type="text"
                      v-model="data.phone"
                      placeholder="رقم الهاتف"
                      name="phoneNum"
                      id="phoneNum"
                      :class="
                        $v.$errors.find((el) => el.$property == 'phone')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-cellphone</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'phone')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "phone").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">رقم البطاقة</label>
                  <div class="input_parent position-relative">
                    <input autocomplete="off"
                      type="text"
                      v-model="data.nationalid"
                      placeholder="رقم البطاقة"
                      name="phoneNum"
                      id="phoneNum"
                      :class="
                        $v.$errors.find((el) => el.$property == 'nationalid')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute" style="top: 18px"
                      >mdi-card-account-details</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'nationalid')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "nationalid")
                      .$message
                  }}
                </span>
              </v-col>
            </v-row>
          </v-container>
          <div class="actions text-center">
            <v-btn color="green" type="submit" :loading="btnLoading">حفظ</v-btn>
            <v-btn
              color="red"
              class="ml-3"
              @click="dialog = false"
              :disabled="btnLoading"
              >الغاء</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { supplierStore } from "@/stores/supplier/supplier";

// Validator
import useVuelidator from "@vuelidate/core";
import {
  required,
  helpers,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";

// Init STores
const supplierModule = supplierStore();

// Local Data
const data = ref({
  name: null,
  phone: null,
  nationalid: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  name: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  phone: {
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    minLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 11 رقم",
      minLength(11)
    ),
    maxLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 11 رقم",
      maxLength(11)
    ),
  },
  nationalid: {
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    minLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 14 رقم",
      minLength(14)
    ),
    maxLength: helpers.withMessage(
      "هذا الحقل يجب ان يتكون من 14 رقم",
      maxLength(14)
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
