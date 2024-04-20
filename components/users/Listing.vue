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
      <v-row v-if="users" class="px-4">
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">المستخدمين</h1>
          <v-data-table-server
            :headers="headers"
            :items="users.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="users.totalElements ? users.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
          >
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@6"></v-skeleton-loader>
            </template>
            <template v-slot:headers>
              <tr>
                <th>رقم</th>
                <th>اسم المستخدم</th>
                <th>الاسم الاول</th>
                <th>اسم العائلة</th>
                <th>العهدة</th>
                <th class="hide_on_print" v-if="showUpdate || showDelete">
                  اجراء
                </th>
              </tr>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.index + 1 }}</td>
                <td>{{ item.selectable.username }}</td>
                <td>{{ item.selectable.firstName }}</td>
                <td>{{ item.selectable.lastName }}</td>
                <td>{{ item.selectable.custody }}</td>
                <td class="hide_on_print" v-if="showUpdate || showDelete">
                  <v-icon
                    color="blue"
                    style="cursor: pointer"
                    @click="(toUpdate = item.selectable), (openUpdate = true)"
                    v-if="showUpdate"
                    >mdi-square-edit-outline</v-icon
                  >
                  <v-icon
                    color="red"
                    style="cursor: pointer"
                    v-if="showDelete"
                    class="mx-1"
                    size="23"
                    @click="(user = item.selectable), (openMoney = true)"
                    >mdi-currency-usd</v-icon
                  >
                  <v-icon
                    color="red"
                    style="cursor: pointer"
                    v-if="showDelete"
                    :loading="item.selectable.loading"
                    size="23"
                    @click="openDel(item.selectable)"
                    >mdi-delete</v-icon
                  >
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
                  users.totalElements
                    ? Math.ceil(users.totalElements / perPage)
                    : 1
                "
              ></v-pagination
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <users-update
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

    <users-money
      :openPopup="openMoney"
      v-if="openMoney"
      @closePopup="(openMoney = false), (user = null)"
      :user="user"
      @regetData="
        (page = 1),
          emits('regetItems', {
            page: 1,
            limit: perPage,
          })
      "
    />

    <users-update
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
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";
import { mainStore } from "@/stores";

// Init Store
const authModule = authStore();
const mainModule = mainStore();
const { loggerData } = storeToRefs(authModule);
const { regetData } = storeToRefs(mainModule);

const showAdd = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "USER_ADD"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showUpdate = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "USER_UPDATE"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showDelete = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "USER_DELETE"
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
const user = ref(null);
const openMoney = ref(false);
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
    title: "المستخدمين",
    disabled: true,
  },
];

const headers = ref([
  { title: "رقم", key: "index", width: "10px" },
  { title: "اسم المورد", key: "name" },
  { title: "رقم الهاتف", key: "phone" },
  { title: "رقم البطاقة", key: "nationalid" },
  { title: "قيمة العهدة", key: "custody" },
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
const props = defineProps(["users", "loading"]);

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
    `يرجي تاكيد الطلب قبل الحذف, تريد تاكيد حذف المستخدم ${item.username} ؟`,
    { ...item, url: "user" }
  );
  toDelete.value = item.selectable;
};
</script>

<style lang="scss"></style>
