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
      <v-row v-if="invoices" class="px-4 mt-1">
        <v-col cols="12" class="px-0">
          <ReportsClientsPaymentsFilter
            class="mb-7"
            :loading="loading"
            @filterData="
              (selectedGranary = $event.granaryId), emits('filterData', $event)
            "
            :reFilter="reFilter"
            @refiltered="reFilter = false"
          />
        </v-col>
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">تقرير مستحقات الشركة</h1>

          <v-data-table-server
            :headers="headers"
            :items="invoices.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="invoices.totalElements ? invoices.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
            id="clients_payments"
            return-object
          >
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.index + 1 }}
            </template>
            <template v-slot:item.isFullPayed="{ item }">
              <v-chip color="green" label v-if="item.selectable.isFullPayed"
                >مدفوع بالكامل</v-chip
              >
              <v-chip color="red" label v-if="!item.selectable.isFullPayed"
                >غير مكتمل</v-chip
              >
            </template>
            <template v-slot:item.invoiceDate="{ item }">
              <p>
                {{ moment(item.selectable.date).format("DD/MM/YYYY") }}
              </p>
            </template>
            <template v-slot:item.productDetails="{ item }">
              {{ item.selectable.product.name }} /
              {{ item.selectable.productType.name }}
            </template>
            <template v-slot:item.totalInvoicePrice="{ item }">
              {{ item.selectable.totalPrice.toLocaleString() }}
            </template>
            <template v-slot:item.totalInvoicePriceAfterDiscount="{ item }">
              {{ item.selectable.totalAfterDiscount.toLocaleString() }}
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
  { title: "التاريخ", key: "date" },
  { title: "اجمالي الكمية", key: "totalQuantitySupplied" },
  { title: "اجمالي القيمة", key: "companyDues" },
  { title: "القيمة المدفوعة", key: "paied" },
  { title: "القيمة المتبقية", key: "remaining" },
  { title: "نوع التحويل", key: "transactionType" },
  { title: "حالة الدفع", key: "isFullPayed" },
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
    title: "تقرير مستحقات العملاء",
    disabled: true,
  },
];

const reFilter = ref(false);
const selectedGranary = ref("");

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
const props = defineProps(["invoices", "loading", "suppliers", "granaries"]);

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
</script>

<style lang="scss">
#clients_payments {
  .v-data-table-header__content span {
    font-size: 14px !important;
    white-space: nowrap;
  }
  td {
    white-space: nowrap;
    font-size: 14px;
  }
}
</style>
