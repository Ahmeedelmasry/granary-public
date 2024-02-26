<template>
  <div class="dashboard_banners_listing">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
        <v-btn width="20" size="sm" elevation="0" color="transparent">
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
        <v-col cols="12" class="section_container dashboard_table pa-0">
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
            <template v-slot:bottom>
              <span class="d-none"></span>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.index + 1 }}
            </template>
            <template v-slot:item.date="{ item }">
              <p>
                {{ moment(item.selectable.date).format("DD/MM/YYYY") }} <br />
                {{ moment(item.selectable.date).format("hh:mm") }}
              </p>
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
const perPage = ref(1000);

const headers = ref([
  { title: "رقم", key: "index" },
  { title: "الصومعة", key: "granary.name" },
  { title: "المورد", key: "supplier.name" },
  { title: "قيمة السداد", key: "paid" },
  { title: "المبلغ المتبقي", key: "remain" },
  { title: "تاريخ السداد", key: "date" },
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
</script>

<style lang="scss"></style>