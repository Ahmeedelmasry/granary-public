<template>
  <div class="dashboard_banners_listing">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
        <v-btn
          @click="openAdd = true"
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
          v-if="showAdd"
        >
          <v-icon color="white" size="25">mdi-plus-circle</v-icon>
        </v-btn>
      </div>
      <v-breadcrumbs :items="items" dir="rtl" class="pa-0 mb">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
    <v-container class="page_container" fluid>
      <v-row v-if="products" class="px-4">
        <v-col cols="12" class="section_container dashboard_table pa-0">
          <v-data-table-server
            :headers="headers"
            :items="products.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="products.totalElements ? products.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
            show-expand
          >
            <template v-slot:column.data-table-expand>
              <th style="white-space: nowrap">عرض الفرز</th>
            </template>
            <template v-slot:expanded-row="{ item }">
              <table
                class="w-100"
                style="border: 1px solid #cfcfcf !important; border-radius: 7px"
              >
                <thead>
                  <tr>
                    <th
                      class="text-center font-weight-bold"
                      style="
                        padding: 10px 0 !important;
                        background-color: #f1f1f1 !important;
                      "
                    >
                      اسم الفرز
                    </th>
                    <th
                      class="text-center font-weight-bold"
                      style="
                        padding: 10px 0 !important;
                        background-color: #f1f1f1 !important;
                      "
                    >
                      سعر الاردب
                    </th>
                    <th
                      class="text-center font-weight-bold"
                      style="
                        padding: 10px 0 !important;
                        background-color: #f1f1f1 !important;
                      "
                    >
                      وزن الاردب
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="itemType in item.selectable.typePriceList"
                    :key="itemType.id"
                  >
                    <td class="text-center" style="padding: 10px 0 !important">
                      {{ itemType.productType.name }}
                    </td>
                    <td class="text-center" style="padding: 10px 0 !important">
                      {{ itemType.ardabPrice }}
                    </td>
                    <td class="text-center" style="padding: 10px 0 !important">
                      {{ itemType.weightPerArdab }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@3"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.index + 1 }}
            </template>
            <template
              v-slot:item.actions="{ item }"
              v-if="showUpdate || showDelete"
            >
              <v-icon
                color="blue"
                style="cursor: pointer"
                @click="(toUpdate = item), (openUpdate = true)"
                v-if="showUpdate"
                >mdi-square-edit-outline</v-icon
              >
              <v-btn
                elevation="0"
                color="transparent"
                :loading="item.selectable.loading"
                :ripple="false"
                v-if="showDelete"
              >
                <v-icon
                  color="red"
                  style="cursor: pointer"
                  class="ml-2"
                  size="23"
                  @click="openDel(item.selectable)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </template>
            <template v-slot:no-data>
              <div>لايوجد بيانات</div>
            </template>
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
          </v-data-table-server>
  
          <v-row v-if="!loading" class="align-center">
            <v-col cols="3">
              <div class="ps-5 d-flex align-center">
                <v-select
                  v-model="perPage"
                  :items="[10, 50, 100, 500]"
                  variant="outlined"
                  hide-details
                ></v-select>
                <label
                  for=""
                  class="mb-2 d-block text-end ms-3 mt-1"
                  style="font-size: 12px"
                  >النتائج لكل صفحة</label
                >
              </div>
            </v-col>
            <v-col cols="9">
              <v-pagination
                v-model="page"
                :length="
                  products.totalElements
                    ? Math.ceil(products.totalElements / perPage)
                    : 1
                "
              ></v-pagination
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <products-update
      :openPopup="openUpdate"
      v-if="openUpdate"
      @closePopup="(openUpdate = false), (toUpdate = null)"
      :toUpdate="toUpdate"
      @regetData="
        (page = 1),
          emits('regetItems', {
            page: 1,
            limit: perPage,
          })
      "
      :units="units"
    />

    <products-add
      :openPopup="openAdd"
      v-if="openAdd"
      @closePopup="openAdd = false"
      @regetData="
        emits('regetItems', {
          page: 1,
          limit: perPage,
        })
      "
      :units="units"
    />
  </div>
</template>
<script setup>
import { VDataTableServer } from "vuetify/lib/labs/components.mjs";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";
import { mainStore } from "@/stores";

// Init Store
const authModule = authStore();
const mainModule = mainStore();

const { regetData } = storeToRefs(mainModule);
const { loggerData } = storeToRefs(authModule);

const showAdd = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "PRODUCT_ADD"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showUpdate = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "PRODUCT_UPDATE"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showDelete = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "PRODUCT_DELETE"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

// Local Data
const openAdd = ref(false);
const openUpdate = ref(false);
const openDelete = ref(false);
const toUpdate = ref(null);
const toDelete = ref(null);
const page = ref(1);
const perPage = ref(10);

const headers = ref([
  { title: "اسم المنتج", key: "name", width: "70%" },
  { title: "اجراء", key: "actions" },
]);

const items = [
  {
    title: "الرئيسية",
    disabled: false,
    to: {
      name: "index",
    },
  },
  {
    title: "المنتجات",
    disabled: true,
  },
];

// Props
const props = defineProps(["products", "loading", "units"]);

// Emits
const emits = defineEmits(["regetItems"]);

watch(
  () => page.value,
  (newVal) => {
    emits("regetItems", {
      page: newVal,
      limit: perPage.value,
    });
  }
);

watch(
  () => perPage.value,
  (newVal) => {
    emits("regetItems", {
      page: page.value,
      limit: newVal,
    });
  }
);


watch(
  () => regetData.value,
  (newVal) => {
    if (newVal) {
      emits("regetItems", {
        page: 1,
        limit: perPage.value,
      });
    }
  }
);

// Methods
const openDel = (item) => {
  mainModule.handleErr(
    "alert",
    "حذف توريد",
    `يرجي تاكيد الطلب قبل الحذف, تريد تاكيد حذف المنتج ${item.name} ؟`,
    { ...item, url: "product" }
  );

  toDelete.value = item.selectable;
};
</script>

<style lang="scss"></style>
