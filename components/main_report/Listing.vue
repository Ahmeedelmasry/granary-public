<template>
  <div class="main_report">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
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
      <v-row class="px-4">
        <v-col cols="12">
          <MainReportFilter
            @filterData="
              (product = $event.productId), emits('filterData', $event)
            "
            :loading="loading"
          />
        </v-col>
        <v-col cols="12" v-if="loading" class="mt-5">
          <VSkeletonLoader type="heading, list-item@5" />
        </v-col>
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0 mt-10"
          id="print_this"
          v-if="data.length && !loading"
        >
          <h1 dir="rtl" class="my-2 hide_till_print main_report_heading">
            اجمالي تراكمي ال{{ product?.name }}
          </h1>
          <table dir="rtl" class="w-100" id="normal_table">
            <thead>
              <tr>
                <th class="text-start">البيان التراكمي</th>
                <th
                  class="text-start"
                  v-for="item in data"
                  :key="item.productTypeName"
                >
                  {{ item.productTypeName }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>رصيد امس</td>
                <td v-for="item in data" :key="item.productTypeName">
                  {{ item.totalQuantitiesYesterday }}
                </td>
              </tr>
              <tr>
                <td>وارد اليوم</td>
                <td v-for="item in data" :key="item.productTypeName">
                  {{ item.totalQuantitiesToday }}
                </td>
              </tr>
              <tr>
                <td>الاجمالي</td>
                <td v-for="item in data" :key="item.productTypeName">
                  {{
                    item.totalQuantitiesToday + item.totalQuantitiesYesterday
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";
import { mainStore } from "@/stores";

// Init Store
const authModule = authStore();
const mainModule = mainStore();

const { regetData } = storeToRefs(mainModule);
const { loggerData } = storeToRefs(authModule);

const product = ref(null);

const items = [
  {
    title: "الرئيسية",
    disabled: false,
    to: {
      name: "index",
    },
  },
];

// Print
const printObj = ref({
  id: "print_this",
  popTitle: " -",
  extraCss:
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
});

// Props
const props = defineProps(["data", "loading"]);

// Emits
const emits = defineEmits(["filterData"]);
</script>

<style lang="scss">
#normal_table {
  tr {
    td,
    th {
      padding: 15px;
      border: 1px solid;
    }
    th {
      font-size: 20px;
    }
  }
}

@media print {
  .main_report_heading {
    font-size: 55px !important;
  }
  #normal_table {
    margin-top: 20px;
    tr {
      td,
      th {
        padding: 25px !important;
        border: 1px solid !important;
        font-size: 40px !important;
      }
      th {
        font-size: 50px !important;
      }
    }
  }
}
</style>
