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
        >
          <v-icon color="white" size="25">mdi-plus-circle</v-icon>
        </v-btn>
        <v-btn
          width="20"
          size="sm"
          elevation="0"
          color="transparent"
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
      <v-row v-if="taxes" class="px-4">
        <v-col cols="12" class="section_container dashboard_table">
          <v-data-table-server
            :headers="headers"
            :items="taxes.content"
            :loading="loading"
            v-model:items-per-page="perPage"
            v-model:page="page"
            :items-length="taxes.totalElements ? taxes.totalElements : 0"
            no-data-text="لايوجد بيانات"
            show-current-page
          >
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@4"></v-skeleton-loader>
            </template>
            <template v-slot:item.index="{ item }">
              {{ item.index + 1 }}
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                color="blue"
                style="cursor: pointer"
                @click="(toUpdate = item), (openUpdate = true)"
                >mdi-square-edit-outline</v-icon
              >
              <v-btn
                elevation="0"
                color="transparent"
                :loading="item.selectable.loading"
                :ripple="false"
              >
                <v-icon
                  color="red"
                  style="cursor: pointer"
                  class="ml-2"
                  size="23"
                  @click="(toDelete = item.selectable), (openDelete = true)"
                  >mdi-lock</v-icon
                >
              </v-btn>
            </template>
            <template v-slot:no-data>
              <div>لايوجد بيانات</div>
            </template>
          </v-data-table-server>
        </v-col>
      </v-row>
    </v-container>

    <taxes-update
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

    <taxes-update
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

// Local Data
const openAdd = ref(false);
const openUpdate = ref(false);
const openDelete = ref(false);
const toUpdate = ref(null);
const toDelete = ref(null);
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
    title: "انواع الضرايب",
    disabled: true,
  },
];

const headers = ref([
  { title: "رقم", key: "index" },
  { title: "اسم الضريبة", key: "name" },
  { title: "قيمة الضريبة", key: "value" },
  { title: "اجراء", key: "actions" },
]);

// Props
const props = defineProps(["taxes", "loading"]);

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
</script>

<style lang="scss"></style>
