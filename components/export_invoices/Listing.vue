<template>
  <div class="dashboard_invoices_listing">
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
          class="mx-3"
          v-print="printObj"
        >
          <v-icon color="white" size="25">mdi-printer</v-icon>
        </v-btn>
        <v-btn
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
          @click="showFilters = !showFilters"
        >
          <v-icon color="white" size="25">
            {{ showFilters ? "mdi-filter-off" : "mdi-filter" }}</v-icon
          >
        </v-btn>
      </div>
      <v-breadcrumbs :items="items" dir="rtl" class="pa-0 mb">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
    <v-container class="page_container" fluid>
      <v-row v-if="invoices" class="px-4">
        <v-col cols="12">
          <transition>
            <export-invoices-Filter
              v-if="showFilters"
              @filterData="
                emits('filterData', {
                  page: page,
                  limit: perPage,
                  filters: $event,
                })
              "
              :loading="loading"
            />
          </transition>
        </v-col>
        <v-col
          cols="12"
          class="section_container dashboard_table pa-0"
          id="printable"
        >
          <h1 dir="rtl" class="my-2 hide_till_print">فواتير التوريد</h1>
          <v-data-table-server
            :headers="headers"
            :items="invoices.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="invoices.totalElements ? invoices.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
            id="invoices_table"
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
                <th>بعد الخصم</th>
                <th>بعد الخصم والتعتيق</th>
                <th v-if="showUpdate || showDelete">اجراء</th>
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
                  {{ item.selectable.totalAfterDiscount.toFixed(2) }}
                </td>
                <td>
                  {{ parseInt(item.selectable.totalAfterDiscountWithAging) }}
                </td>
                <td class="hide_on_print" v-if="showUpdate || showDelete">
                  <!--<v-icon
                    color="blue"
                    style="cursor: pointer"
                    @click="(toUpdate = item), (openUpdate = true)"
                    v-if="showUpdate"
                    >mdi-square-edit-outline</v-icon
                  > -->
                  <v-btn
                    elevation="0"
                    color="transparent"
                    :loading="item.selectable.loading"
                    :ripple="false"
                    v-if="showDelete"
                  >
                    <v-icon
                      color="red"
                      style="cursor: pointer"
                      class="ml-2"
                      size="23"
                      @click="openDel(item.selectable)"
                      >mdi-delete</v-icon
                    >
                  </v-btn>
                </td>
              </tr>
              <tr v-if="item.index + 1 == invoices.content.length">
                <td colspan="7" style="font-size: 14px !important">الاجمالي</td>
                <td colspan="1" style="font-size: 14px !important">
                  {{ totals.clearWeight.toFixed(2) }}
                </td>
                <td colspan="1" style="font-size: 14px !important">
                  {{ totals.beforeDisc.toFixed(2) }}
                </td>
                <td style="font-size: 14px !important">
                  {{ totals.disc.toFixed(2) }}
                </td>
                <td style="font-size: 14px !important">
                  {{ totals.afterDisc }}
                </td>
              </tr>
            </template>
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@6"></v-skeleton-loader>
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
                invoices.totalElements
                  ? Math.ceil(invoices.totalElements / perPage)
                  : 1
              "
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <export-invoices-update
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

    <export-invoices-update
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
import moment from "moment";
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

// Init Store
const authModule = authStore();
const { loggerData } = storeToRefs(authModule);

const showAdd = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "SUPPLYINVOICE_ADD"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showUpdate = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "SUPPLYINVOICE_UPDATE"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

const showDelete = computed(() => {
  return loggerData.value.authorities.find(
    (el) => el.authority == "SUPPLYINVOICE_DELETE"
  ) || loggerData.value.authorities.find((el) => el.authority == "ADMIN")
    ? true
    : false;
});

// Local Data
const openAdd = ref(false);
const openUpdate = ref(false);
// const openDelete = ref(false);
const toUpdate = ref(null);
const showFilters = ref(false);
// const toDelete = ref(null);
const page = ref(1);
const perPage = ref(10);

const headers = ref([
  { title: "رقم", key: "index", width: "0px" },
  { title: "التاريخ", key: "invoiceDate" },
  { title: "الصومعة", key: "granary.name" },
  { title: "المورد", key: "supplier.name" },
  { title: "المستند", key: "documentNumber" },
  { title: "رقم السيارة", key: "carNumber" },
  { title: "منتج / فرز", key: "productDetails" },
  { title: "قبل الخصم", key: "totalInvoicePrice" },
  { title: "الكمية", key: "totalClearWeight" },
  { title: "بعد الخصم", key: "totalInvoicePriceAfterDiscount" },
  { title: "بعد الخصم والتعتيق", key: "totalAfterDiscountWithAging" },
  { title: "اجراء", key: "actions" },
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
    title: "فواتير التوريد",
    disabled: true,
  },
];

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
      obj.disc += el.totalAfterDiscount;
      obj.afterDisc += parseInt(el.totalAfterDiscountWithAging);
    });
    return obj;
  }
});

// Print
const printObj = ref({
  id: "printable",
  popTitle: " -",
  extraCss:
    "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
});

// Props
const props = defineProps(["invoices", "loading"]);

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

// Methods
const openDel = (item) => {
  toDelete.value = item.selectable;
};
</script>

<style lang="scss">
#invoices_table {
  .v-data-table-header__content span {
    font-size: 12px !important;
    white-space: nowrap;
  }
  td {
    font-size: 12px !important;
    white-space: nowrap;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
