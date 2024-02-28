<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" width="700" persistent>
      <v-card class="pb-5">
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل منتج" : "اضافة منتج جديد" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent>
          <v-container>
            <v-row dir="rtl">
              <v-col cols="12" md="6">
                <div class="field_container">
                  <label for="typeName">اسم المنتج</label>
                  <div class="input_parent position-relative">
                    <input
                      type="text"
                      v-model="data.name"
                      placeholder="اسم المنتج"
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
              <!-- <v-col cols="12" md="6" class="mt-0" v-if="productTypes.content">
                <div class="field_container">
                  <label for="typeName">وحدات وزن المنتج</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      :items="units.content"
                      item-title="name"
                      item-value="id"
                      transition="slide-y-transition"
                      return-object
                      variant="outlined"
                      chips
                      multiple
                      placeholder="وحدات وزن المنتج"
                      hide-details
                      v-model="data.measuringUnits"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'measuringUnits'
                        )
                          ? 'err_field'
                          : ''
                      "
                    >
                      <template v-slot:item="{ props, item }">
                        <v-list-item
                          v-bind="props"
                          :disabled="item.raw.disabled"
                        ></v-list-item>
                      </template>
                    </v-autocomplete>
                    <v-icon class="position-absolute">mdi-shape-outline</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'productType')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "productType")
                      .$message
                  }}
                </span>
              </v-col> -->
              <v-col cols="12" md="6" class="mt-0" v-if="productTypes.content">
                <div class="field_container">
                  <label for="typeName">فروزات المنتج</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      :items="productTypes.content"
                      item-title="name"
                      item-value="selectedId"
                      transition="slide-y-transition"
                      return-object
                      variant="outlined"
                      chips
                      multiple
                      placeholder="فروزات المنتج"
                      hide-details
                      v-model="data.productType"
                      :class="
                        $v.$errors.find((el) => el.$property == 'productType')
                          ? 'err_field'
                          : ''
                      "
                    >
                      <template v-slot:item="{ props, item }">
                        <v-list-item
                          v-bind="props"
                          :disabled="item.raw.disabled"
                        ></v-list-item>
                      </template>
                    </v-autocomplete>
                    <v-icon class="position-absolute">mdi-shape-outline</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'productType')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "productType")
                      .$message
                  }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <div style="max-height: 400px; overflow-y: auto">
          <v-table class="text-center w-100" v-if="data.productType.length">
            <thead>
              <tr>
                <th
                  style="background-color: #f3f3f3 !important"
                  class="text-center font-weight-bold"
                >
                  اسم الفرز
                </th>
                <th
                  style="background-color: #f3f3f3 !important"
                  class="text-center font-weight-bold"
                >
                  سعر الاردب
                </th>
                <th
                  style="background-color: #f3f3f3 !important"
                  class="text-center font-weight-bold"
                >
                  وزن الاردب
                </th>
                <!-- <th
                style="background-color: #f3f3f3 !important"
                class="text-center font-weight-bold"
              >
                حذف
              </th> -->
              </tr>
            </thead>
            <tbody v-for="(item, i) in data.productType" :key="item.id">
              <tr>
                <td style="font-size: 15px">{{ item.selectedName }}</td>
                <td class="text-center">
                  <div class="field_container pt-5">
                    <div class="input_parent">
                      <input
                        class="px-0 text-center"
                        style="width: 200px"
                        placeholder="سعر الاردب"
                        type="text"
                        v-model="item.ardabPrice"
                        @keyup="validateSingleRowArdabPrice(item)"
                        :class="item.priceErr ? 'err_field' : ''"
                      />
                    </div>
                    <span
                      class="err_msg d-inline-block mt-1"
                      style="font-size: 12px"
                      >{{ item.priceErr }}</span
                    >
                  </div>
                </td>
                <td class="text-center">
                  <div class="field_container pt-5">
                    <div class="input_parent">
                      <input
                        class="px-0 text-center"
                        style="width: 200px"
                        placeholder="وزن الاردب"
                        type="text"
                        v-model="item.weightPerArdab"
                        @keyup="validateSingleRowArdabWeight(item)"
                        :class="item.weightErr ? 'err_field' : ''"
                      />
                    </div>
                    <span
                      class="err_msg d-inline-block mt-1"
                      style="font-size: 12px"
                      >{{ item.weightErr }}</span
                    >
                  </div>
                </td>
                <!-- <td>
                <v-icon
                  color="red"
                  @click="data.productType.splice(i, 1)"
                  v-if="!item.disabled"
                  >mdi-lock</v-icon
                >
                <v-icon color="red" style="opacity: 0.5" v-else
                  >mdi-lock</v-icon
                >
              </td> -->
              </tr>
            </tbody>
          </v-table>
        </div>
        <v-divider class="mt-5"></v-divider>
        <v-divider></v-divider>
        <div class="actions text-center mt-5">
          <v-btn
            color="red"
            class="mr-3"
            @click="dialog = false"
            :disabled="btnLoading"
            >الغاء</v-btn
          >
          <v-btn
            color="green"
            type="submit"
            @click="submitData"
            :loading="btnLoading"
            >حفظ</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/products/products";
import { productTypeStore } from "@/stores/product_types/types.js";
import { storeToRefs } from "pinia";

// Validator
import useVuelidator from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

// Init STores
const productsModule = productStore();
const productTypesModule = productTypeStore();

// Store Data
const { productTypes } = storeToRefs(productTypesModule);

// Local Data
const data = ref({
  name: null,
  productType: [],
  measuringUnits: [],
});

const dialog = ref(false);
const btnLoading = ref(false);

const roles = ref({
  name: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  productType: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
});

// Props
const props = defineProps(["openPopup", "toUpdate", "units"]);

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

const validateSingleRowArdabPrice = (item) => {
  item.priceErr = "";
  if (!item.ardabPrice) {
    item.priceErr = "هذا الحقل مطلوب";
    return;
  }
  if (isNaN(item.ardabPrice)) {
    item.priceErr = "هذا الحقل يقبل ارقام فقط";
    return;
  }
  if (Number(item.ardabPrice) <= 0) {
    item.priceErr = "يجب ان يكون الرقم اكبر من 0";
    return;
  }
};

const validateSingleRowArdabWeight = (item) => {
  item.weightErr = "";
  if (!item.weightPerArdab) {
    item.weightErr = "هذا الحقل مطلوب";
    return;
  }
  if (isNaN(item.weightPerArdab)) {
    item.weightErr = "هذا الحقل يقبل ارقام فقط";
    return;
  }
  if (Number(item.weightPerArdab) <= 0) {
    item.weightErr = "يجب ان يكون الرقم اكبر من 0";
    return;
  }
};

let $v = useVuelidator(roles, data);

const submitData = async () => {
  const res = await $v.value.$validate();
  if (res) {
    let isvalid = true;
    for (let i = 0; i < data.value.productType.length; i++) {
      if (!data.value.productType[i].ardabPrice) {
        data.value.productType[i].priceErr = "هذا الحقل مطلوب";
        isvalid = false;
        break;
      }
      if (isNaN(data.value.productType[i].ardabPrice)) {
        data.value.productType[i].priceErr = "هذا الحقل يقبل ارقام فقط";
        isvalid = false;
        break;
      }
      if (Number(data.value.productType[i].ardabPrice) <= 0) {
        data.value.productType[i].priceErr = "يجب ان يكون الرقم اكبر من 0";
        isvalid = false;
        break;
      }

      if (!data.value.productType[i].weightPerArdab) {
        data.value.productType[i].weightErr = "هذا الحقل مطلوب";
        isvalid = false;
        break;
      }
      if (isNaN(data.value.productType[i].weightPerArdab)) {
        data.value.productType[i].weightErr = "هذا الحقل يقبل ارقام فقط";
        isvalid = false;
        break;
      }
      if (Number(data.value.productType[i].weightPerArdab) <= 0) {
        data.value.productType[i].weightErr = "يجب ان يكون الرقم اكبر من 0";
        isvalid = false;
        break;
      }
    }

    if (isvalid) {
      const obj = {
        name: data.value.name,
        locked: props.toUpdate.selectable.locked,
        typePriceList: [],
        id: props.toUpdate.selectable.id,
      };

      data.value.productType.forEach((el) => {
        el.priceErr = "";
        el.weightErr = "";
        obj.typePriceList.push({
          pricePerKilo:
            parseFloat(el.ardabPrice) / parseFloat(el.weightPerArdab),
          ardabPrice: el.ardabPrice,
          weightPerArdab: el.weightPerArdab,
          productType: {
            id: el.id,
          },
          id: el.id,
        });
      });

      btnLoading.value = true;

      const result = await productsModule.doUpdateProduct(obj);
      if (result) {
        emits("regetData");
        dialog.value = false;
      }
      btnLoading.value = false;
    }
  }
};

// Hooks
onMounted(async () => {
  dialog.value = props.openPopup;
  await productTypesModule.doGetProductTypes();

  props.toUpdate.selectable.typePriceList.forEach((el) => {
    data.value.productType.push({
      ...el,
      selectedId: el.productType.id,
      selectedName: el.productType.name,
      disabled: true,
    });

    productTypes.value.content.forEach((e) => {
      if (e.id == el.productType.id) {
        e.disabled = true;
      }
    });
  });

  props.toUpdate.selectable.measuringUnitList.forEach((el) => {
    data.value.measuringUnits.push(el);

    props.units.content.forEach((e) => {
      if (e.id == el.id) {
        e.disabled = true;
      }
    });
  });

  data.value.name = props.toUpdate.selectable.name;
});
</script>
