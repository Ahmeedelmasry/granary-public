<template>
  <div class="reports_shortcuts">
    <div class="page_toolbar d-flex align-center justify-space-between">
      <div class="toolbar_btns">
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
      <v-breadcrumbs :items="items" dir="rtl" class="pa-0">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
    <v-container fluid>
      <v-row class="px-4">
        <v-col cols="3" v-for="route in localRoutes" :key="route.name">
          <v-card
            bordered
            style="
              box-shadow: rgb(74, 74, 74) 0px 0px 25px -18px !important;
              border-radius: 25px;
              border: 1px solid rgb(231, 231, 231);
            "
            elevation="0"
            class="text-center py-7"
            @click="router.push({ name: route.name })"
          >
            <img
              v-if="route.name.includes('dues')"
              src="/shortcuts/money-bag.png"
              alt=""
              width="70"
            />
            <img
              v-else-if="route.name.includes('payments')"
              src="/shortcuts/money.png"
              alt=""
              width="70"
            />
            <img v-else src="/shortcuts/invoice.png" alt="" width="70" />
            <v-card-title>
              {{
                route.name.includes("supplier_dues")
                  ? "مستحقات الموردين"
                  : route.name.includes("clients_dues")
                  ? "مستحقات العملاء"
                  : route.name.includes("suppliers_payments")
                  ? "سدادات الموردين"
                  : "التوريدات"
              }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Init Router
const router = useRouter();
const route = useRoute();

// Local Data
const localRoutes = ref([]);
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
    disabled: true,
  },
];

onMounted(() => {
  localRoutes.value = router.options.routes.filter(
    (el) => el.path.includes("reports") && el.name != route.name
  );
});
</script>
