<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل صومعة" : "اضافة صومعة جديدة" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم الصومعة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.name"
                      placeholder="اسم الصومعة"
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
                  <label for="typeName">المحافظة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.governorate"
                      placeholder="المحافظة"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'governorate')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-city-variant-outline
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'governorate')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "governorate")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">المدينة</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.city"
                      placeholder="المدينة"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'city')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-city-variant-outline
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'city')"
                >
                  {{ $v.$errors.find((el) => el.$property == "city").$message }}
                </span>
              </v-col>
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">المنطقة / الحي</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.region"
                      placeholder="المنطقة / الحي"
                      name="typeName"
                      id="typeName"
                      :class="
                        $v.$errors.find((el) => el.$property == 'region')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-city-variant-outline
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'region')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "region").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" md="6" v-if="clients.content">
                <div class="field_container">
                  <label for="typeName">اسم العميل</label>
                  <div class="input_parent position-relative">
                    <select
                      name=""
                      id=""
                      class="w-100"
                      v-model="data.client"
                      :class="
                        $v.$errors.find((el) => el.$property == 'client')
                          ? 'err_field'
                          : ''
                      "
                    >
                      <option value="">قم باختيار العميل</option>
                      <option
                        :value="item.id"
                        v-for="item in clients.content"
                        :key="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>

                    <v-icon class="position-absolute"
                      >mdi-account-cowboy-hat-outline
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'client')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "client").$message
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
import { granaryStore } from "@/stores/granary/granary.js";
import { clientStore } from "@/stores/clients/clients.js";
import { storeToRefs } from "pinia";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Init STores
const granaryModule = granaryStore();
const clientsModule = clientStore();

// Store Data
const { clients } = storeToRefs(clientsModule);

// Local Data
const data = ref({
  name: null,
  governorate: null,
  city: null,
  region: null,
  client: null,
});
const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  name: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  governorate: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  city: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  region: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  client: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
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
      const result = await granaryModule.doUpdateGranary({
        id: props.toUpdate.selectable.id,
        name: data.value.name,
        governorate: data.value.governorate,
        city: data.value.city,
        region: data.value.region,
        client: {
          id: data.value.client,
        },
      });

      if (result) {
        emits("regetData");
        dialog.value = false;
      }
    } else {
      const result = await granaryModule.doAddGranary({
        name: data.value.name,
        governorate: data.value.governorate,
        city: data.value.city,
        region: data.value.region,
        client: {
          id: data.value.client,
        },
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
  clientsModule.doGetClients();
  dialog.value = props.openPopup;
  if (props.toUpdate) {
    data.value.name = props.toUpdate.selectable.name;
    data.value.governorate = props.toUpdate.selectable.governorate;
    data.value.city = props.toUpdate.selectable.city;
    data.value.region = props.toUpdate.selectable.region;
    data.value.client = props.toUpdate.selectable.client.id;
  }
});
</script>
