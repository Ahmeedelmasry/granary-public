<template>
  <div class="menu_drawer_dashboard">
    <v-navigation-drawer
      v-model="drawer"
      elevation="1"
      :touchless="true"
      :width="320"
      class="pt-0 cart-drawer"
      location="right"
      theme="dark"
      id="app_drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="d-flex justify-space-between w-100 pl-4 pl-2"
          dir="rtl"
          style="font-size: 20px; font-weight: bold"
        >
          <div class="lang_switch d-flex align-center pt-2" style="gap: 15px">
            <v-avatar size="36px" style="border: 2px solid rgb(109, 109, 109)">
              <v-icon color="blue" icon="mdi-account"></v-icon>
            </v-avatar>
            <p style="font-size: 18px; font-weight: 900">احمد المصري</p>
          </div>
        </v-card-title>
        <v-divider class="mt-2"></v-divider>
        <v-divider></v-divider>
        <v-list density="compact" nav class="pa-0 mt-5">
          <v-list-item
            style="
              gap: 0px !important;
              padding: 10px 12px;
              display: flex;
              justify-content: flex-end;
            "
            append-icon="mdi-receipt-text"
            title="فواتير التوريد"
            value="export_invoices"
            :to="{ name: 'export_invoices' }"
          >
          </v-list-item>
          <v-list-item
            style="
              gap: 0px !important;
              padding: 10px 12px;
              display: flex;
              justify-content: flex-end;
            "
            append-icon="mdi-currency-usd"
            title="سدادات الموردين"
            value="suppliers_payments"
            :to="{ name: 'suppliers_payments' }"
          >
          </v-list-item>

          <v-list-item
            style="
              gap: 0px !important;
              padding: 10px 12px;
              display: flex;
              justify-content: flex-end;
            "
            append-icon="mdi-currency-usd"
            class="text-white"
            title="مستحقات الشركة"
            value="clients_dues"
            :to="{ name: 'clients_dues' }"
          >
          </v-list-item>

          <v-list-group value="التقارير">
            <template v-slot:activator="{ props }">
              <v-list-item
                style="
                  gap: 0px !important;
                  padding: 10px 14px;
                  display: flex;
                  justify-content: flex-end;
                "
                v-bind="props"
                append-icon="mdi-file-chart"
                prepend-icon="mdi-chevron-down"
                title="التقارير"
              >
              </v-list-item>
            </template>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              class="text-white"
              title="تقرير التوريدات"
              value="reports-invoices"
              :to="{ name: 'reports-invoices' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              class="text-white"
              title="تقرير التوريدات 2"
              value="reports-no-aging-invoices"
              :to="{ name: 'reports-no-aging-invoices' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              class="text-white"
              title="تقرير مستحقات الموردين"
              value="reports-suppliers_dues"
              :to="{ name: 'reports-supplier_dues' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              class="text-white"
              title="تقرير سدادات الموردين"
              value="reports-suppliers_payments"
              :to="{ name: 'reports-suppliers_payments' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              class="text-white"
              title="تقرير مستحقات الشركة"
              value="reports-clients_dues"
              :to="{ name: 'reports-clients_dues' }"
            >
            </v-list-item>
          </v-list-group>
          <v-list-group value="مدخلات البرنامج">
            <template v-slot:activator="{ props }">
              <v-list-item
                style="
                  gap: 0px !important;
                  padding: 10px 14px;
                  display: flex;
                  justify-content: flex-end;
                "
                v-bind="props"
                append-icon="mdi-cog-transfer"
                prepend-icon="mdi-chevron-down"
                title="مدخلات البرنامج"
              >
              </v-list-item>
            </template>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="درجات الفرز"
              value="suppliers"
              :to="{ name: 'product_types' }"
            >
            </v-list-item>

            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="المنتجات"
              value="products"
              :to="{ name: 'products' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="الصوامع"
              value="granary"
              :to="{ name: 'granary' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="العملاء"
              value="clients"
              :to="{ name: 'clients' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="الموردين"
              value="product_types"
              :to="{ name: 'suppliers' }"
            >
            </v-list-item>
            <!-- <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="وحدات الوزن"
              value="measuring_units"
              :to="{ name: 'measuring_units' }"
            >
            </v-list-item> -->
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="وحدات الفوارغ"
              value="product_units"
              :to="{ name: 'product_units' }"
            >
            </v-list-item>
            <v-list-item
              style="
                gap: 0px !important;
                padding: 10px 40px 10px 0;
                display: flex;
                justify-content: flex-end;
              "
              append-icon="mdi-circle-medium"
              title="انواع الضرايب"
              value="taxes"
              :to="{ name: 'taxes' }"
            >
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
// Data
const drawer = ref(false);
const currentWidth = ref(null);

// Event Bus
const { $listen } = useNuxtApp();

// Props
const props = defineProps(["currentWidth"]);

// Watchers
watch(
  () => props.currentWidth,
  (newVal) => {
    if (newVal < 1200) {
      drawer.value = false;
    } else {
      drawer.value = true;
    }
  }
);

// Hooks
onMounted(() => {
  $listen("openDashboardDrawer", () => {
    drawer.value = !drawer.value;
  });
  window.onresize = () => {
    currentWidth.value = window.innerWidth;
  };
  currentWidth.value = window.innerWidth;
  props.currentWidth < 1200 ? (drawer.value = false) : (drawer.value = true);
});
</script>

<style lang="scss">
.menu_drawer_dashboard {
  .v-list-item--nav {
    .v-list-item-title {
      font-size: 14px;
      line-height: unset;
      font-weight: bold;
      letter-spacing: 1px;
      color: rgb(156, 156, 156);
    }

    &.v-list-item--active {
      color: rgb(231, 231, 231) !important;
      .v-list-item-title {
        color: rgb(231, 231, 231) !important;
      }
      i {
        color: white !important;
      }
    }
  }
  i {
    color: rgb(187, 186, 186) !important;
  }
  ul {
    padding-right: 0;
    padding-right: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    width: 7px !important;
    background-color: rgb(242, 242, 242);
  }
  ::-webkit-scrollbar-thumb {
    width: 10px !important;
    background-color: rgb(209, 209, 209);
  }
  a {
    color: rgb(41, 41, 41);
    width: 100%;
    padding: 10px 20px;
    font-size: 18px;
  }
}
// Media Queries
@media (max-width: 580px) {
  .nav-link {
    font-size: 12px;
  }
}
</style>
