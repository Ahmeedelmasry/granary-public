<template>
  <div class="supplierDuesListing">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
        <v-btn
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
          :loading="printLoading"
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
      <v-row v-if="supplierDues" class="px-4 mt-1">
        <v-col cols="12" class="px-0 py-0">
          <ReportsSupplierSupplierDuesFilter
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
          <h1 dir="rtl" class="my-2 hide_till_print">تقرير مستحقات الموردين</h1>

          <ReportsSupplierSupplierDuesSupplierData
            :supplierDues="supplierDues"
            :selectedSupplier="selectedSupplier"
            :selectedGranary="selectedGranary"
            :fromDate="fromDate"
            v-if="supplierDues.length && !loading"
            :toDate="toDate"
            class="mb-5"
          />
          <v-data-table-server
            :headers="headers"
            :items="supplierDues.length ? supplierDues : []"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="
              supplierDues.totalElements ? supplierDues.totalElements : 0
            "
            no-data-text="لايوجد بيانات"
            show-current-page
          >
            <template v-slot:headers>
              <tr>
                <th>رقم</th>
                <th>كود</th>
                <th>اسم المورد</th>
                <th>اجمالي الكمية</th>
                <th>نقدية مستحقة</th>
                <th>نقدية مسددة</th>
                <th>نقدية متبقية</th>
                <!-- <th class="hide_till_print_table">نقدية مستلمة</th> -->
                <th class="hide_till_print_table">التوقيع</th>
              </tr>
            </template>
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@6"></v-skeleton-loader>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>
                  {{ item.index + 1 }}
                </td>
                <td>
                  {{ item.selectable.supplier.id }}
                </td>
                <td>
                  {{ item.selectable.supplier.name }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalAmountSupplied) }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalPriceSupplied) }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalCashPaied) }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalCashRemaining) }}
                </td>
                <!-- <td class="hide_till_print_table">
                  <div class="field_container">
                    <div class="input_parent">
                      <input autocomplete="off" type="text" style="width: 130px" />
                    </div>
                  </div>
                </td> -->
                <td class="hide_till_print_table">
                  <div class="field_container">
                    <div class="input_parent sig">
                      <input
                        autocomplete="off"
                        type="text"
                        style="width: 130px"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="item.index + 1 == supplierDues.length">
                <td colspan="2" style="font-size: 14px">الاجمالي</td>
                <td style="font-size: 14px"></td>
                <td style="font-size: 14px">
                  {{ parseInt(totals.totalAmountSupplied) }}
                </td>
                <td style="font-size: 14px">
                  {{ parseInt(totals.totalPriceSupplied) }}
                </td>
                <td style="font-size: 14px">
                  {{ parseInt(totals.totalCashPaied) }}
                </td>
                <td style="font-size: 14px">
                  {{ parseInt(totals.totalCashRemaining) }}
                </td>
                <td style="font-size: 14px" class="hide_till_print_table"></td>
              </tr>
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

// Local Data
const page = ref(1);
const perPage = ref(1000);
const printLoading = ref(false);
const fromDate = ref(null);
const toDate = ref(null);
const selectedSupplier = ref(null);
const selectedGranary = ref(null);

const headers = ref([
  { title: "ترتيب", key: "index" },
  { title: "رقم", key: "supplier.id" },
  { title: "كمية التوريد", key: "supplier.name" },
  { title: "قيمة التوريد", key: "totalAmountSupplied" },
  { title: "قيمة التوريد", key: "totalPriceSupplied" },
  { title: "قيمة التوريد", key: "totalCashPaied" },
  { title: "تاريخ التوريد", key: "totalCashRemaining" },
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
    title: "تقرير مستحقات الموردين",
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
  beforeOpenCallback(vue) {
    printLoading.value = true;
  },
  // openCallback() {
  //   console.log("opened");
  // },
  closeCallback(vue) {
    printLoading.value = false;
  },
});

// Props
const props = defineProps([
  "supplierDues",
  "loading",
  "suppliers",
  "granaries",
]);

// Emits
const emits = defineEmits(["regetItems", "filterData", "loading"]);

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
    totalAmountSupplied: 0,
    totalPriceSupplied: 0,
    totalCashPaied: 0,
    totalCashRemaining: 0,
  };
  if (props.supplierDues && props.supplierDues.length) {
    props.supplierDues.forEach((el) => {
      obj.totalAmountSupplied += el.totalAmountSupplied;
      obj.totalPriceSupplied += el.totalPriceSupplied;
      obj.totalCashPaied += el.totalCashPaied;
      obj.totalCashRemaining += el.totalCashRemaining;
    });
    return obj;
  }
});

// Provide
provide("supplierSelect", (data) => {
  fromDate.value = data.creationFromDate;
  toDate.value = data.creationToDate;
  selectedSupplier.value = data.supplierId;
  selectedGranary.value = data.granaryId;
});
</script>

<style lang="scss">
.supplierDuesListing {
  .v-table {
    padding-bottom: 0 !important;
  }
}
</style>
