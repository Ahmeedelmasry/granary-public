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
        >
          <v-icon color="white" size="25">mdi-plus-circle</v-icon>
        </v-btn>
        <v-btn
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
          v-print="printObj"
          class="ms-3"
        >
          <v-icon color="white" size="25">mdi-printer</v-icon>
        </v-btn>
      </div>
      <v-breadcrumbs :items="items" dir="rtl" class="pa-0 mb">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
    <v-container class="page_container" fluid>
      <v-row v-if="suppliers" class="px-4">
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">الموردين</h1>
          <v-data-table-server
            :headers="headers"
            :items="suppliers.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="
              suppliers.totalElements ? suppliers.totalElements : 0
            "
            no-data-text="لايوجد بيانات"
            show-current-page
          >
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@6"></v-skeleton-loader>
            </template>
            <template v-slot:headers>
              <tr>
                <th>كود</th>
                <th>اسم المورد</th>
                <th>رقم الهاتف</th>
                <th>رقم البطاقة</th>
                <th class="hide_on_print">اجراء</th>
              </tr>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.selectable.id }}</td>
                <td>{{ item.selectable.name }}</td>
                <td>{{ item.selectable.phone }}</td>
                <td>{{ item.selectable.nationalid }}</td>
                <td class="hide_on_print">
                  <v-icon
                    color="blue"
                    style="cursor: pointer"
                    @click="(toUpdate = item), (openUpdate = true)"
                    >mdi-square-edit-outline</v-icon
                  >
                  <v-btn
                    elevation="0"
                    color="transparent"
                    :loading="item.selectable.loading"
                    :ripple="false"
                  >
                    <v-icon
                      color="red"
                      style="cursor: pointer"
                      class="ml-2"
                      size="23"
                      @click="(toDelete = item.selectable), (openDelete = true)"
                      >mdi-lock</v-icon
                    >
                  </v-btn>
                </td>
              </tr>
            </template>
            <template v-slot:no-data>
              <div>لايوجد بيانات</div>
            </template>
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
          </v-data-table-server>
          <div
            class="text-center pt-2 d-flex justify-space-between hide_on_print"
            style="width: 60%"
            v-if="!loading"
          >
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
            <v-pagination
              v-model="page"
              :length="
                suppliers.totalElements
                  ? Math.ceil(suppliers.totalElements / perPage)
                  : 1
              "
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <suppliers-update
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
    />

    <suppliers-update
      :openPopup="openAdd"
      v-if="openAdd"
      @closePopup="openAdd = false"
      @regetData="
        emits('regetItems', {
          page: 1,
          limit: perPage,
        })
      "
    />
  </div>
</template>
<script setup>
import { VDataTableServer } from "vuetify/lib/labs/components.mjs";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

// Local Data
const openAdd = ref(false);
const openUpdate = ref(false);
const openDelete = ref(false);
const toUpdate = ref(null);
const toDelete = ref(null);
const page = ref(1);
const perPage = ref(10);

const items = [
  {
    title: "الرئيسية",
    disabled: false,
    to: {
      name: "index",
    },
  },
  {
    title: "المودرين",
    disabled: true,
  },
];

const headers = ref([
  { title: "رقم", key: "index", width: "10px" },
  { title: "اسم المورد", key: "name" },
  { title: "رقم الهاتف", key: "phone" },
  { title: "رقم البطاقة", key: "nationalid" },
  { title: "اجراء", key: "actions" },
]);

// Print
const printObj = ref({
  id: "printable",
  popTitle: " -",
  extraCss:
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  // beforeOpenCallback(vue) {
  //   console.log("Before Open");
  // },
  // openCallback(vue) {
  //   console.log("Opened");
  // },
  // closeCallback(vue) {
  //   console.log("After Close");
  // },
});

// Props
const props = defineProps(["suppliers", "loading"]);

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
</script>

<style lang="scss"></style>
