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
          <ClientsPaymentsFilter
            class="mb-7"
            :loading="loading"
            @filterData="getData"
            :reFilter="reFilter"
            @refiltered="(reFilter = false), (selected = [])"
          />
        </v-col>
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">مستحقات الشركة</h1>

          <v-data-table-server
            :headers="headers"
            :items="invoices.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model="selected"
            v-model:page="page"
            :items-length="invoices.totalElements ? invoices.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
            id="clients_payments"
            return-object
            :show-select="
              invoices.content && invoices.content.length ? true : false
            "
          >
            <!-- <template v-slot:bottom>
              <span class="d-none"></span>
            </template> -->
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.index + 1 }}
            </template>
            <template v-slot:item.invoiceDate="{ item }">
              <p>
                {{ moment(item.selectable.date).format("DD/MM/YYYY") }}
              </p>
            </template>
            <template v-slot:item.totalCompanyDues="{ item }">
              <p>
                {{ Number(item.selectable.totalCompanyDues).toFixed(2) }}
              </p>
            </template>
            <template v-slot:item.paied="{ item }">
              <p>
                {{ Number(item.selectable.paied).toFixed(2) }}
              </p>
            </template>
            <template v-slot:item.remaining="{ item }">
              <p>
                {{ Number(item.selectable.remaining).toFixed(2) }}
              </p>
            </template>

            <template v-slot:item.isFullPayed="{ item }">
              <v-chip color="green" label v-if="item.selectable.isFullPayed"
                >مكتمل</v-chip
              >
              <v-chip color="red" label v-if="!item.selectable.isFullPayed"
                >غير مكتمل</v-chip
              >
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
            v-if="!loading && invoices.content && invoices.content.length"
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
                invoices.totalElements
                  ? Math.ceil(invoices.totalElements / perPage)
                  : 1
              "
            ></v-pagination>
          </div>
          <div class="text-end my-5 me-5 hide_on_print" v-if="selected.length">
            <v-btn color="green" @click="openPopup = true">دفع</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <ClientsPaymentsPayNow
      v-if="openPopup"
      :openPopup="openPopup"
      @closePopup="openPopup = false"
      :selected="selected"
      @regetData="reFilter = true"
      :selectedGranary="selectedGranary"
    />
  </div>
</template>
<script setup>
import { VDataTableServer } from "vuetify/lib/labs/components.mjs";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import moment from "moment";

// Local Data
const page = ref(1);
const perPage = ref(10);

const headers = ref([
  { title: "رقم", key: "index" },
  { title: "التاريخ", key: "date" },
  { title: "اجمالي الكمية", key: "totalQuantitySupplied" },
  { title: "اجمالي القيمة", key: "totalCompanyDues" },
  { title: "القيمة المدفوعة", key: "paied" },
  { title: "القيمة المتبقية", key: "remaining" },
  { title: "حالة الدفع", key: "isFullPayed" },
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
    title: "مستحقات الشركة",
    disabled: true,
  },
];

const selected = ref([]);
const openPopup = ref(false);
const reFilter = ref(false);
const selectedGranary = ref("");
const selectedClient = ref("");
const fromDate = ref("");
const toDate = ref("");

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

// Methods
const getData = (event) => {
  selectedGranary.value = event.granaryId;
  selectedClient.value = event.clientID;
  fromDate.value = event.FromDate;
  toDate.value = event.ToDate;
  selected.value = [];
  emits("filterData", {
    ...event,
    limit: perPage.value,
    page: page.value,
  });
};

watch(
  () => page.value,
  (newVal) => {
    emits("filterData", {
      FromDate: fromDate.value,
      ToDate: toDate.value,
      clientID: selectedClient.value,
      granaryId: selectedGranary.value,
      page: newVal,
      limit: perPage.value,
    });
  }
);

watch(
  () => perPage.value,
  (newVal) => {
    emits("filterData", {
      FromDate: fromDate.value,
      ToDate: toDate.value,
      clientID: selectedClient.value,
      granaryId: selectedGranary.value,
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
  @media print {
    th:first-child,
    td:first-child {
      display: none !important;
    }
  }
}
</style>
