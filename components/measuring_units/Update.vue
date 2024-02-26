<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل وحدة وزن" : "اضافة وحدة وزن جديدة" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم الوحدة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.name"
                      placeholder="اسم الوحدة"
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
                  <label for="typeName">عدد الكيلوهات</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.quantityPerKilo"
                      placeholder="عدد الكيلوهات"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'quantityPerKilo'
                        )
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find((el) => el.$property == 'quantityPerKilo')
                  "
                >
                  {{
                    $v.$errors.find((el) => el.$property == "quantityPerKilo")
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
import { measuringUnitStore } from "@/stores/measuring_units/measuringUnits.js";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers, between, numeric } from "@vuelidate/validators";

// Init STores
const measuringUnitsModule = measuringUnitStore();

// Local Data
const data = ref({
  name: null,
  quantityPerKilo: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  name: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
  },
  quantityPerKilo: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    minLength: helpers.withMessage(
      "هذا الحقل يجب ان تكون قيمته بين 1 و 1000000",
      between(1, 1000000)
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
      const result = await measuringUnitsModule.doUpdateUnit({
        id: props.toUpdate.selectable.id,
        name: data.value.name,
        quantityPerKilo: data.value.quantityPerKilo,
      });

      if (result) {
        emits("regetData");
        dialog.value = false;
      }
    } else {
      const result = await measuringUnitsModule.doAddUnit({
        name: data.value.name,
        quantityPerKilo: data.value.quantityPerKilo,
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
    data.value.quantityPerKilo = props.toUpdate.selectable.quantityPerKilo;
  }
});
</script>
