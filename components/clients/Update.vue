<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="400" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل عميل" : "اضافة عميل جديد" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12">
                <div class="field_container">
                  <label for="typeName">اسم العميل</label>
                  <div class="input_parent position-relative">
                    <input autocomplete="off"
                      type="text"
                      v-model="data.name"
                      placeholder="اسم العميل"
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
import { clientStore } from "@/stores/clients/clients";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, numeric, between, helpers } from "@vuelidate/validators";

// Init STores
const clientsModule = clientStore();

// Local Data
const data = ref({
  name: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  name: {
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
    if (props.toUpdate) {
      const result = await clientsModule.doUpdateClient({
        id: props.toUpdate.selectable.id,
        name: data.value.name,
      });

      if (result) {
        emits("regetData");
        dialog.value = false;
      }
    } else {
      const result = await clientsModule.doAddClient({
        name: data.value.name,
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
  }
});
</script>
