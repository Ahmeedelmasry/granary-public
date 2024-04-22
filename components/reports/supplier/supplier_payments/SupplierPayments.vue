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
      <v-row v-if="payments" class="px-4 mt-1">
        <v-col cols="12" class="px-0">
          <ReportsSupplierSupplierPaymentsFilter
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
          <h1 dir="rtl" class="my-2 hide_till_print">تقرير سدادات الموردين</h1>

          <v-data-table-server
            :headers="headers"
            :items="payments.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="payments.totalElements ? payments.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
          >
            <template v-slot:headers>
              <tr>
                <th>كود</th>
                <th>المورد</th>
                <th>الصومعة</th>
                <th>قيمة السداد</th>
                <th>المبلغ المتبقي</th>
                <th>تاريخ السداد</th>
                <th>تاريخ الانشاء</th>
                <th>ملاحظات</th>
              </tr>
            </template>
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.selectable.supplier.id }}
            </template>
            <template v-slot:item.date="{ item }">
              <p>
                {{ moment(item.selectable.date).format("DD/MM/YYYY") }}
              </p>
            </template>
            <template v-slot:item.creationDate="{ item }">
              <p>
                {{ moment(item.selectable.creationDate).format("DD/MM/YYYY") }}
              </p>
            </template>
            <template v-slot:no-data>
              <div>لايوجد بيانات</div>
            </template>
            <template v-slot:tfoot>
              <tr v-if="totals">
                <td colspan="2" style="font-size: 14px">الاجمالي</td>
                <td style="font-size: 14px"></td>
                <td style="font-size: 14px">
                  {{ Number(totals.paid).toFixed(2) }}
                </td>
                <td style="font-size: 14px">
                  {{ Number(totals.remain).toFixed(2) }}
                </td>
                <td style="font-size: 14px" class="hide_till_print_table"></td>
              </tr>
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
const perPage = ref(1000);

const headers = ref([
  { title: "رقم", key: "index" },
  { title: "الصومعة", key: "granary.name" },
  { title: "المورد", key: "supplier.name" },
  { title: "قيمة السداد", key: "paid" },
  { title: "المبلغ المتبقي", key: "remain" },
  { title: "تاريخ السداد", key: "date" },
  { title: "تاريخ الانشاء", key: "creationDate" },
  { title: "ملاحظات", key: "notes" },
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
    title: "تقرير سدادات الموردين",
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
const props = defineProps(["payments", "loading", "suppliers", "granaries"]);

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

const totals = computed(() => {
  const obj = {
    paid: 0,
    remain: 0,
  };
  if (props.payments?.content && props.payments.content.length) {
    props.payments.content.forEach((el) => {
      obj.paid += el.paid;
      obj.remain += el.remain;
    });
    console.log(obj);
    return obj;
  }
  return null;
});
</script>

<style lang="scss"></style>
