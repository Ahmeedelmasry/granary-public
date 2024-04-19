<template>
  <div class="update_banner">
    <v-dialog v-model="dialog" :fullscreen="true" persistent>
      <v-card style="border-radius: unset !important">
        <v-card-title
          class="mb-0 text-center bg-grey-lighten-3 main_title font-safe-bold"
          style="font-size: 22px"
        >
          {{ toUpdate ? "تعديل فاتورة توريد" : "اضافة فاتورة توريد" }}
        </v-card-title>
        <v-form class="pa-5" @submit.prevent="submitData">
          <v-container fluid>
            <v-row dir="rtl">
              <v-col cols="12">
                <h3 style="font-size: 23px; font-weight: 700">بيانات اساسية</h3>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="granary">الصومعة</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      return-object
                      :disabled="
                        !loggerData.authorities.find(
                          (el) => el.authority == 'ADMIN'
                        )
                      "
                      :items="
                        loggerData.authorities.find(
                          (el) => el.authority == 'ADMIN'
                        )
                          ? granaries.content
                          : loggerData.granaries
                      "
                      item-title="name"
                      item-value="id"
                      variant="outlined"
                      placeholder="اختر الصومعة"
                      id="granary"
                      v-model="data.granary"
                      hide-details
                      :class="[
                        $v.$errors.find((el) => el.$property == 'granary')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-store-24-hour</v-icon>
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
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="supplier">المورد</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      return-object
                      :items="suppliers.content"
                      item-value="id"
                      item-title="name"
                      variant="outlined"
                      placeholder="اختر المورد"
                      name="supplier"
                      id="supplier"
                      v-model="data.supplier"
                      auto-select-first
                      hide-details
                      :custom-filter="
                        (item, text, obj) =>
                          obj.title.toString().includes(text) ||
                          obj.value.id.toString().includes(text)
                      "
                      :class="[
                        $v.$errors.find((el) => el.$property == 'supplier')
                          ? 'err_field'
                          : '',
                      ]"
                    >
                      <template v-slot:prepend-item>
                        <div
                          class="d-flex ps-4 pe-2 py-2"
                          style="justify-content: space-between"
                        >
                          <span>الاسم</span>
                          <span>الكود</span>
                        </div>
                      </template>

                      <template v-slot:item="{ props, item }">
                        <div
                          v-bind="props"
                          class="d-flex select_slot"
                          style="justify-content: space-between"
                        >
                          <v-list-item>{{ item.raw.name }}</v-list-item>
                          <v-list-item>{{ item.raw.id }}</v-list-item>
                        </div>
                      </template>
                    </v-autocomplete>
                    <v-icon class="position-absolute"
                      >mdi-account-cowboy-hat
                    </v-icon>
                    <v-icon
                      class="position-absolute"
                      style="left: 10px; right: unset; z-index: 111"
                      @click="openAddSupplier = true"
                      >mdi-plus-circle</v-icon
                    >
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'supplier')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "supplier").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="documentNumber">رقم المستند</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="رقم المستند"
                      name="documentNumber"
                      id="documentNumber"
                      v-model="data.documentNumber"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'documentNumber'
                        )
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-file </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find((el) => el.$property == 'documentNumber')
                  "
                >
                  {{
                    $v.$errors.find((el) => el.$property == "documentNumber")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="carNumber">رقم السيارة</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="رقم السيارة"
                      name="carNumber"
                      id="carNumber"
                      v-model="data.carNumber"
                      :class="
                        $v.$errors.find((el) => el.$property == 'carNumber')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-car </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'carNumber')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "carNumber")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="" v-if="clients.content">
                <div class="field_container">
                  <label for="date">التاريخ</label>
                  <div class="input_parent position-relative flat_picker">
                    <div
                      :class="
                        $v.$errors.find((el) => el.$property == 'date')
                          ? 'err_field'
                          : ''
                      "
                    >
                      <flat-pickr
                        name="date_from"
                        id="date_from"
                        v-model="data.date"
                        :config="config"
                        placeholder="سنة/يوم/شهر"
                        style="padding-right: 0 !important"
                      />
                      <v-icon class="position-absolute">mdi-calendar</v-icon>
                    </div>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'date')"
                >
                  {{ $v.$errors.find((el) => el.$property == "date").$message }}
                </span>
              </v-col>
            </v-row>
            <v-row dir="rtl" class="mt-5">
              <v-col cols="12">
                <h3 style="font-size: 23px; font-weight: 700">بيانات المنتج</h3>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="product">المنتج</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      return-object
                      :items="products.content"
                      item-title="name"
                      item-value="id"
                      name="product"
                      id="product"
                      v-model="data.product"
                      variant="outlined"
                      @update:model-value="
                        (data.productType = null),
                          (data.productMeasuringUnit = null)
                      "
                      placeholder="اختر المنتج"
                      hide-details
                      :class="[
                        $v.$errors.find((el) => el.$property == 'product')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-basket</v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'product')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "product").$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="productType">الفرز</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      return-object
                      :items="productTypes"
                      item-title="productType.name"
                      item-value="id"
                      variant="outlined"
                      placeholder="اختر الفرز"
                      name="productType"
                      id="productType"
                      no-data-text="لايوجد بيانات"
                      v-model="data.productType"
                      hide-details
                      :class="[
                        $v.$errors.find((el) => el.$property == 'productType')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-sitemap </v-icon>
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
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="carWeightWith">الوزن القائم</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="الوزن القائم"
                      name="carWeightWith"
                      v-model="data.carWeightWith"
                      id="carWeightWith"
                      :class="
                        $v.$errors.find((el) => el.$property == 'carWeightWith')
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-weight-kilogram
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find((el) => el.$property == 'carWeightWith')
                  "
                >
                  {{
                    $v.$errors.find((el) => el.$property == "carWeightWith")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="" v-if="clients.content">
                <div class="field_container">
                  <label for="carWeightWithOut">الوزن الفارغ</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="الوزن الفارغ"
                      name="carWeightWithOut"
                      v-model="data.carWeightWithOut"
                      id="carWeightWithOut"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'carWeightWithOut'
                        )
                          ? 'err_field'
                          : ''
                      "
                    />

                    <v-icon class="position-absolute"
                      >mdi-weight-kilogram
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find((el) => el.$property == 'carWeightWithOut')
                  "
                >
                  {{
                    $v.$errors.find((el) => el.$property == "carWeightWithOut")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="" v-if="clients.content">
                <div class="field_container">
                  <label for="typeName">صافي الوزن</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="صافي الوزن"
                      name="typeName"
                      id="typeName"
                      disabled
                      :value="totalWeightFromCar"
                    />

                    <v-icon class="position-absolute"
                      >mdi-weight-kilogram
                    </v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row dir="rtl" class="mt-5">
              <v-col cols="12">
                <h3 style="font-size: 23px; font-weight: 700">
                  بيانات التعبئة
                </h3>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="productUnit">وحدة التعبئة</label>
                  <div class="input_parent position-relative">
                    <v-autocomplete
                      item-title="name"
                      item-value="id"
                      return-object
                      :items="productUnits.content"
                      name="productUnit"
                      id="productUnit"
                      v-model="data.productUnit"
                      variant="outlined"
                      placeholder="اختر وحدة التعبئة"
                      hide-details
                      :disabled="
                        !productUnits.content || !productUnits.content.length
                      "
                      :class="[
                        $v.$errors.find((el) => el.$property == 'productUnit')
                          ? 'err_field'
                          : '',
                      ]"
                    ></v-autocomplete>
                    <v-icon class="position-absolute">mdi-basket-fill </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="$v.$errors.find((el) => el.$property == 'productUnit')"
                >
                  {{
                    $v.$errors.find((el) => el.$property == "productUnit")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">اجمالي وزن الوحدات</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="وزن وحدات التعبئة بالكيلو"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      v-model="data.totalPackingWeight"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'totalPackingWeight'
                        )
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute"
                      >mdi-weight-kilogram
                    </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find(
                      (el) => el.$property == 'totalPackingWeight'
                    )
                  "
                >
                  {{
                    $v.$errors.find(
                      (el) => el.$property == "totalPackingWeight"
                    ).$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="typeName">الصافي بعد خصم وزن الوحدات</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="الصافي بعد خصم وزن الوحدات"
                      name="typeName"
                      id="typeName"
                      :value="totalClearWeight"
                      disabled
                    />
                    <v-icon class="position-absolute"
                      >mdi-weight-kilogram
                    </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg=""> </v-col>
              <v-col cols="12" sm="6" md="3" lg=""> </v-col>
            </v-row>
            <v-row dir="rtl" class="mt-5">
              <v-col cols="12">
                <h3 style="font-size: 23px; font-weight: 700">
                  بيانات الخصومات
                </h3>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="agingPricePerTon">سعر التعتيق</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="سعر التعتيق"
                      name="agingPricePerTon"
                      id="agingPricePerTon"
                      v-model="data.agingPricePerTon"
                      :class="
                        $v.$errors.find(
                          (el) => el.$property == 'agingPricePerTon'
                        )
                          ? 'err_field'
                          : ''
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
                <span
                  class="err_msg"
                  v-if="
                    $v.$errors.find((el) => el.$property == 'agingPricePerTon')
                  "
                >
                  {{
                    $v.$errors.find((el) => el.$property == "agingPricePerTon")
                      .$message
                  }}
                </span>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">اجمالي التعتيق</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="اجمالي التعتيق"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      :value="agingTotalPrice"
                      disabled
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">ضريبة دمغة</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="ضريبة دمغة"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      :value="getTaxes.docTax.value"
                      disabled
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">ضريبة مهن زراعية</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="مهن زراعية"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      :value="getTaxes.agroTax.value"
                      disabled
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">اجمالي الخصم</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="اجمالي الخصم"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      disabled
                      :value="invoicTotalTaxesCut"
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row dir="rtl" class="mt-5">
              <v-col cols="12">
                <h3 style="font-size: 23px; font-weight: 700">
                  القيم النهائية
                </h3>
                <v-divider></v-divider>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">القيمة قبل الخصم</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="القيمة قبل الخصم"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      :value="
                        totalClearWeight && data.productType.pricePerKilo
                          ? (
                              totalClearWeight * data.productType.pricePerKilo
                            ).toFixed(2)
                          : 0
                      "
                      disabled
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight">القيمة بعد الخصم</label>
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="القيمة بعد الخصم"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      disabled
                      :value="
                        invoicTotalTaxesCut
                          ? (
                              totalClearWeight * data.productType.pricePerKilo -
                              invoicTotalTaxesCut
                            ).toFixed(2)
                          : 0
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="">
                <div class="field_container">
                  <label for="totalPackingWeight"
                    >القيمة بعد الخصم والتعتيق</label
                  >
                  <div class="input_parent position-relative">
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder="القيمة بعد الخصم والتعتيق"
                      name="totalPackingWeight"
                      id="totalPackingWeight"
                      disabled
                      :value="
                        invoicTotalTaxesCut
                          ? parseInt(
                              totalClearWeight * data.productType.pricePerKilo -
                                invoicTotalTaxesCut -
                                agingTotalPrice
                            )
                          : 0
                      "
                    />
                    <v-icon class="position-absolute">mdi-currency-usd </v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg=""> </v-col>
              <v-col cols="12" sm="6" md="3" lg=""> </v-col>
              <v-col cols="12" sm="6" md="3" lg=""> </v-col>
            </v-row>
          </v-container>
          <div class="actions text-center mt-7">
            <v-btn
              color="green"
              width="200"
              height="50"
              rounded
              elevation="0"
              type="submit"
              :loading="btnLoading"
              >حفظ</v-btn
            >
            <v-btn
              color="red"
              class="ml-3"
              @click="dialog = false"
              :disabled="btnLoading"
              width="200"
              height="50"
              rounded
              elevation="0"
              >الغاء</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </v-dialog>
    <suppliers-update
      :openPopup="openAddSupplier"
      v-if="openAddSupplier"
      @closePopup="openAddSupplier = false"
      @regetData="suppliersModule.doGetSuppliers(0, 10000)"
    />
  </div>
</template>

<script setup>
import { granaryStore } from "@/stores/granary/granary.js";
import { clientStore } from "@/stores/clients/clients.js";
import { productStore } from "@/stores/products/products.js";
import { supplierStore } from "@/stores/supplier/supplier.js";
import { productUnitsStore } from "@/stores/product_units/units.js";
import { taxStore } from "@/stores/taxes/taxes.js";
import { invoiceModule } from "@/stores/invoices/invoices.js";
import { storeToRefs } from "pinia";
import moment from "moment";
import { authStore } from "@/stores/auth/auth";
import flatPickr from "vue-flatpickr-component";
import { Arabic } from "flatpickr/dist/l10n/ar.js";

// Validator
import useVuelidator from "@vuelidate/core";
import {
  required,
  helpers,
  numeric,
  minLength,
  between,
} from "@vuelidate/validators";

// Init STores
const granaryModule = granaryStore();
const clientsModule = clientStore();
const suppliersModule = supplierStore();
const productsModule = productStore();
const productUnitsModule = productUnitsStore();
const taxedModule = taxStore();
const invoicesModule = invoiceModule();
const authModule = authStore();

// Store Data
const { granaries } = storeToRefs(granaryModule);
const { clients } = storeToRefs(clientsModule);
const { suppliers } = storeToRefs(suppliersModule);
const { products } = storeToRefs(productsModule);
const { productUnits } = storeToRefs(productUnitsModule);
const { taxes } = storeToRefs(taxedModule);
const { loggerData } = storeToRefs(authModule);

// Local Data
const config = ref({
  wrap: true,
  altFormat: "d-m-Y",
  altInput: true,
  dateFormat: "d-m-Y",
  enabled: true,
});

const data = ref({
  granary: null,
  documentNumber: null,
  carNumber: null,
  supplier: null,
  date: moment(new Date()).format("DD-MM-YYYY"),
  product: null,
  productType: null,
  productMeasuringUnit: null,
  carWeightWith: null,
  carWeightWithOut: null,
  productUnit: null,
  totalPackingWeight: null,
  agingPricePerTon: 0,
});
const dialog = ref(false);
const btnLoading = ref(false);
const openAddSupplier = ref(false);

const roles = ref({
  granary: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  documentNumber: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
<<<<<<< HEAD
    minLength: helpers.withMessage("يجب ادخال اكثر من 1 مدخلات", minLength(1)),
=======
    minLength: helpers.withMessage("يجب ادخال اكثر من مدخل", minLength(1)),
>>>>>>> 906b4804fd05bb40c72b9d3170e476bcb9adeb7a
  },
  carNumber: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    minLength: helpers.withMessage("يجب ادخال اكثر من 3 مدخلات", minLength(3)),
  },
  supplier: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  date: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  product: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  productType: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  carWeightWith: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    between: helpers.withMessage(
      "يجب ان يكون الرقم اكبر من 0",
      between(1, 10000000)
    ),
  },
  carWeightWithOut: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    between: helpers.withMessage(
      "يجب ان يكون الرقم اكبر من 0",
      between(1, 10000000)
    ),
  },
  productUnit: { required: helpers.withMessage("هذا الحقل مطلوب", required) },
  totalPackingWeight: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    between: helpers.withMessage(
      "يجب ان يكون الرقم اكبر من 0",
      between(1, 10000000)
    ),
  },
  agingPricePerTon: {
    required: helpers.withMessage("هذا الحقل مطلوب", required),
    numeric: helpers.withMessage("هذا الحقل يقبل ارقام فقط", numeric),
    between: helpers.withMessage(
      "يجب ان يكون الرقم اكبر من او يساوي 0",
      between(0, 10000000)
    ),
  },
});

// Computed
const productTypes = computed(() => {
  if (data.value.product) return data.value.product.typePriceList;
  return [];
});

const totalWeightFromCar = computed(() => {
  if (Number(data.value.carWeightWith) && Number(data.value.carWeightWithOut)) {
    return (
      parseFloat(data.value.carWeightWith) -
      parseFloat(data.value.carWeightWithOut)
    );
  }
  return 0;
});

const totalClearWeight = computed(() => {
  if (
    totalWeightFromCar.value > 0 &&
    data.value.totalPackingWeight &&
    Number(data.value.totalPackingWeight)
  ) {
    return (
      parseFloat(totalWeightFromCar.value) -
      parseFloat(data.value.totalPackingWeight)
    );
  }
  return 0;
});

const agingTotalPrice = computed(() => {
  if (Number(data.value.agingPricePerTon) && Number(totalClearWeight.value)) {
    return Math.ceil(
      (parseFloat(totalClearWeight.value) / 1000) *
        parseFloat(data.value.agingPricePerTon)
    );
  }
  return 0;
});

const getTaxes = computed(() => {
  const obj = {
    docTax: 0,
    agroTax: 0,
  };
  if (taxes.value.content && taxes.value.content.length) {
    obj.docTax = taxes.value.content.find((el) => el.name == "ضريبة دمغة");
    obj.agroTax = taxes.value.content.find((el) => el.name == "مهن زراعية");
  }
  return obj;
});

const totalInvoiceArdabs = computed(() => {
  if (Number(totalClearWeight.value)) {
    const totalArdabs =
      Number(totalClearWeight.value) / data.value.productType.weightPerArdab;

    return Math.ceil(totalArdabs);
  }
  return 0;
});

const invoicTotalTaxesCut = computed(() => {
  if (Number(totalClearWeight.value)) {
    const ardabAgroTaxTotal =
      totalInvoiceArdabs.value * getTaxes.value.agroTax.value;

    const subTotal = getTaxes.value.docTax.value + ardabAgroTaxTotal;
    return subTotal.toFixed(2);
  }
  return 0;
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
  const res = await $v.value.$validate();
  if (res) {
    btnLoading.value = true;
    const obj = {
      granary: {
        id: data.value.granary.id,
      },
      supplier: {
        id: data.value.supplier.id,
      },
      documentNumber: data.value.documentNumber,
      carNumber: data.value.carNumber,
      product: {
        id: data.value.product.id,
      },
      productType: {
        id: data.value.productType.productType.id,
      },
      productPricePerKilo: parseFloat(data.value.productType.pricePerKilo),
      carWeightWith: parseFloat(data.value.carWeightWith),
      carWeightWithOut: parseFloat(data.value.carWeightWithOut),
      totalWeightFromCar: totalWeightFromCar.value,
      packageUnit: {
        id: data.value.productUnit.id,
      },
      totalPackingWeight: parseFloat(data.value.totalPackingWeight),
      totalClearWeight: totalClearWeight.value,
      agingPricePerTon: parseFloat(data.value.agingPricePerTon),
      totalAgingPrice: agingTotalPrice.value,
      formPrice: getTaxes.value.docTax.value,
      pricePerArdab: getTaxes.value.agroTax.value,
      totalArdab: totalInvoiceArdabs.value,
      totalPrice: (
        totalClearWeight.value * parseFloat(data.value.productType.pricePerKilo)
      ).toFixed(2),
      totalDiscount: parseFloat(invoicTotalTaxesCut.value).toFixed(2),
      totalDiscountWithAging: (
        parseFloat(invoicTotalTaxesCut.value) +
        parseFloat(agingTotalPrice.value)
      ).toFixed(2),
      totalAfterDiscount: parseFloat(
        totalClearWeight.value *
          parseFloat(data.value.productType.pricePerKilo) -
          invoicTotalTaxesCut.value
      ).toFixed(2),
      totalAfterDiscountWithAging: parseFloat(
        totalClearWeight.value *
          parseFloat(data.value.productType.pricePerKilo) -
          invoicTotalTaxesCut.value -
          agingTotalPrice.value
      ).toFixed(2),
      date: data.value.date,
    };
    let result;
    if (props.toUpdate) {
      obj.id = props.toUpdate.id;
      result = await invoicesModule.doUpdateInvoice(obj);
    } else {
      result = await invoicesModule.doAddInvoice(obj);
    }
    if (result) {
      localStorage.setItem(
        "selectedItems",
        JSON.stringify({
          granary: data.value.granary,
          product: data.value.product,
          date: data.value.date,
          unit: data.value.productUnit,
          agingPricePerTon: data.value.agingPricePerTon,
        })
      );
      emits("regetData");
      if (props.toUpdate) {
        dialog.value = false;
      }
      $v.value.$reset();
      data.value.documentNumber = null;
      data.value.carNumber = null;
      data.value.supplier = null;
      data.value.productMeasuringUnit = null;
      data.value.carWeightWith = null;
      data.value.carWeightWithOut = null;
      data.value.totalPackingWeight = null;
    }
    btnLoading.value = false;
  }
};

// Hooks
onMounted(async () => {
  dialog.value = props.openPopup;

  await Promise.all([
    clientsModule.doGetClients(0, 10000),
    granaryModule.doGetGranaries(0, 10000),
    suppliersModule.doGetSuppliers(0, 10000),
    productsModule.doGetProducts(0, 10000),
    productUnitsModule.doGetProductUnits(0, 10000),
    taxedModule.doGetTaxes(0, 10000),
  ]);

  const localData = JSON.parse(localStorage.getItem("selectedItems"));
  if (localData) {
    data.value.product = localData.product;
    data.value.date = localData.date;
    data.value.productUnit = localData.unit;
    data.value.granary = localData.granary;
    data.value.agingPricePerTon = localData.agingPricePerTon;
  }
  if (useCookie("selected_granary").value) {
    data.value.granary = authModule.selected_granary[0];
  }
  if (props.toUpdate) {
    data.value.granary = props.toUpdate.granary;
    data.value.documentNumber = props.toUpdate.documentNumber;
    data.value.carNumber = props.toUpdate.carNumber;
    data.value.supplier = props.toUpdate.supplier;
    data.value.date = moment(new Date(props.toUpdate.date)).format(
      "DD-MM-YYYY"
    );
    data.value.product = products.value.content.find((el) => {
      return el.id == props.toUpdate.product.id;
    });
    data.value.productType = data.value.product.typePriceList.find(
      (el) => el.productType.id == props.toUpdate.productType.id
    );
    data.value.productMeasuringUnit = props.toUpdate.packageUnit;
    data.value.carWeightWith = props.toUpdate.carWeightWith;
    data.value.carWeightWithOut = props.toUpdate.carWeightWithOut;
    data.value.totalPackingWeight = props.toUpdate.totalPackingWeight;
    data.value.agingPricePerTon = props.toUpdate.agingPricePerTon;
  }
});
</script>
