<template>
  <div class="dashboard_banners_listing">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
        <v-btn
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
          v-print="printObj"
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
      <v-row class="px-4 mt-1">
        <v-col cols="12" class="px-0">
          <ReportsPaymentCustodyFilter
            class="mb-7"
            :loading="loading"
            @filterData="emits('filterData', $event)"
          />
        </v-col>
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">تقرير مصروفات العهدة</h1>
          <v-data-table-server
            :headers="headers"
            :items="payments.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="
              payments
                ? payments.totalElements
                  ? payments.totalElements
                  : 0
                : 0
            "
            no-data-text="لايوجد بيانات"
            show-current-page
            id="invoices_report_table"
          >
            <template v-slot:headers>
              <tr>
                <th>رقم</th>
                <th>المستخدم</th>
                <th>قبل الصرف</th>
                <th>قيمة الصرف</th>
                <th>بعد الصرف</th>
                <th>تاريخ التحويل</th>
              </tr>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.index + 1 }}</td>
                <td>
                  {{ item.selectable.user.userName }}
                </td>
                <td>
                  {{ item.selectable.previousCustody }}
                </td>
                <td>
                  {{ item.selectable.outingValue }}
                </td>
                <td>
                  {{
                    parseInt(item.selectable.previousCustody) -
                    parseInt(item.selectable.outingValue)
                  }}
                </td>
                <td>
                  {{
                    moment(item.selectable.creationDate).format("DD/MM/YYYY")
                  }}
                </td>
              </tr>
            </template>
            <template v-slot:bottom>
              <div class="d-none"></div>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:no-data>
              <div>لايوجد بيانات</div>
            </template>
          </v-data-table-server>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { VDataTableServer } from "vuetify/lib/labs/components.mjs";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import moment from "moment";

// Local Data
const page = ref(1);
const perPage = ref(10000);

const headers = ref([
  { title: "رقم", key: "index" },
  { title: "المستخدم", key: "adminUser" },
  { title: "قيمة العهدة السابقة", key: "previousCustody" },
  { title: "قيمة التحويل", key: "addedValue" },
  { title: "بعد التحويل", key: "custodyUser" },
  { title: "تاريخ التحويل", key: "creationDate" },
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
    title: "التقارير",
    to: {
      name: "reports",
    },
  },
  {
    title: "تقرير مصروفات العهدة",
    disabled: true,
  },
];

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
const props = defineProps(["payments", "loading"]);

// Emits
const emits = defineEmits(["regetItems", "filterData"]);

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

// Totals
// const totals = computed(() => {
//   const obj = {
//     clearWeight: 0,
//     beforeDisc: 0,
//     disc: 0,
//     afterDisc: 0,
//   };
//   if (
//     props.invoices &&
//     props.invoices.content &&
//     props.invoices.content.length
//   ) {
//     props.invoices.content.forEach((el) => {
//       obj.clearWeight += el.totalClearWeight;
//       obj.beforeDisc += el.totalPrice;
//       obj.disc += el.totalDiscountWithAging;
//       obj.afterDisc += parseInt(el.totalAfterDiscountWithAging);
//     });
//     return obj;
//   }
// });
</script>

<style lang="scss">
#invoices_report_table {
  .v-data-table-header__content span {
    font-size: 12px !important;
    white-space: nowrap;
  }
  td {
    white-space: nowrap;
    font-size: 12px;
  }
}
</style>
