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
          <ReportsInvoicesFilter
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
          <h1 dir="rtl" class="my-2 hide_till_print">تقرير فواتير التوريد</h1>
          <v-data-table-server
            :headers="headers"
            :items="invoices.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="invoices.totalElements ? invoices.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
            id="invoices_report_table"
          >
            <template v-slot:headers>
              <tr>
                <th>رقم</th>
                <th>التاريخ</th>
                <th>الصومعه</th>
                <th>المورد</th>
                <th>المستند</th>
                <th>رقم السيارة</th>
                <th>منتج / فرز</th>
                <th>الكمية</th>
                <th>قبل الخصم</th>
                <th>قيمة الخصم</th>
                <th>بعد الخصم</th>
              </tr>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.index + 1 }}</td>
                <td>
                  {{ moment(item.selectable.date).format("DD/MM/YYYY") }}
                </td>
                <td>
                  {{ item.selectable.granary.name }}
                </td>
                <td>
                  {{ item.selectable.supplier.name }}
                </td>
                <td>
                  {{ item.selectable.documentNumber }}
                </td>
                <td>
                  {{ item.selectable.carNumber }}
                </td>
                <td>
                  {{ item.selectable.product.name }} /
                  {{ item.selectable.productType.name }}
                </td>
                <td>
                  {{ item.selectable.totalClearWeight.toFixed(2) }}
                </td>
                <td>
                  {{ item.selectable.totalPrice.toFixed(2) }}
                </td>
                <td>
                  {{ item.selectable.totalDiscountWithAging.toFixed(2) }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalAfterDiscountWithAging) }}
                </td>
              </tr>
              <tr v-if="item.index + 1 == invoices.content.length">
                <td colspan="7" style="font-size: 14px">الاجمالي</td>
                <td colspan="1" style="font-size: 14px">
                  {{ totals.clearWeight.toFixed(2) }}
                </td>
                <td colspan="1" style="font-size: 14px">
                  {{ totals.beforeDisc.toFixed(2) }}
                </td>
                <td style="font-size: 14px">{{ totals.disc.toFixed(2) }}</td>
                <td style="font-size: 14px">
                  {{ totals.afterDisc }}
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
  { title: "التاريخ", key: "invoiceDate" },
  { title: "الصومعة", key: "granary.name" },
  { title: "المورد", key: "supplier.name" },
  { title: "المستند", key: "documentNumber" },
  { title: "رقم السيارة", key: "carNumber" },
  { title: "منتج / فرز", key: "productDetails" },
  { title: "بعد الخصم", key: "totalInvoicePriceAfterDiscount" },
  { title: "قبل الخصم", key: "totalInvoicePrice" },
  { title: "قيمة الخصم", key: "totalDiscountWithAging" },
  { title: "بعد الخصم والتعتيق", key: "totalAfterDiscountWithAging" },
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
    title: "تقرير التوريدات",
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

// Totals
const totals = computed(() => {
  const obj = {
    clearWeight: 0,
    beforeDisc: 0,
    disc: 0,
    afterDisc: 0,
  };
  if (
    props.invoices &&
    props.invoices.content &&
    props.invoices.content.length
  ) {
    props.invoices.content.forEach((el) => {
      obj.clearWeight += el.totalClearWeight;
      obj.beforeDisc += el.totalPrice;
      obj.disc += el.totalDiscountWithAging;
      obj.afterDisc += parseInt(el.totalAfterDiscountWithAging);
    });
    return obj;
  }
});
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
