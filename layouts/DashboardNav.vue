<template>
  <div class="res_nav">
    <AppSideDrawer :currentWidth="props.currentWidth" />
    <v-app-bar elevation="1" color="grey-darken-3">
      <v-container fluid>
        <v-row class="align-center" dir="rtl">
          <v-col cols="3" class="d-flex align-center">
            <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6" class="text-center img_container text-end">
            <span
              class="me-4 d-inline-block"
              v-if="
                !authStore().loggerData.authorities.find(
                  (el) => el.authority == 'ADMIN'
                )
              "
              >{{ selected_granary ? selected_granary[0]?.name : "" }}</span
            >
            <div
              class="me-3 d-inline-block"
              id="granaries_menu_activator_responsive"
              style="cursor: pointer"
              v-if="
                !authStore().loggerData.authorities.find(
                  (el) => el.authority == 'ADMIN'
                )
              "
            >
              <v-icon color="white" size="25">mdi-store-24-hour</v-icon>
              <v-menu
                activator="#granaries_menu_activator_responsive"
                transition="slide-y-transition"
                location="bottom right"
                offset="19"
                class="profile_menu text-start"
                width="200"
              >
                <v-list
                  base-color="green"
                  style="box-shadow: 0 0 20px 0 rgba(62, 28, 131, 0.1)"
                  class="text-end"
                  id="profile_menu"
                  mandatory
                  @update:selected="changeGranary"
                  v-model:selected="selected_granary"
                >
                  <v-list-item
                    class="top_bar"
                    v-for="(granary, i) in loggerData.granaries"
                    :key="i"
                    :value="granary"
                  >
                    <v-list-item-title class="my-2">
                      {{ granary.name }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <v-icon size="30" class="me-4 ms-2" @click="openSafe = true"
              >mdi-safe</v-icon
            >
            <v-avatar
              id="profile_menu_activator_responsive"
              style="cursor: pointer"
            >
              <v-icon color="white" size="30">mdi-account-circle</v-icon>
            </v-avatar>
            <v-menu
              activator="#profile_menu_activator_responsive"
              transition="slide-y-transition"
              location="bottom right"
              offset="12"
              class="profile_menu text-start"
              width="200"
            >
              <v-list
                base-color="green"
                style="box-shadow: 0 0 20px 0 rgba(62, 28, 131, 0.1)"
                class="text-end"
                id="profile_menu"
              >
                <v-list-item class="top_bar">
                  <v-list-item-title>
                    مرحبا, {{ loggerData.firstName }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item :to="{ name: 'profile' }">
                  <v-list-item-title>
                    الصفحة الشخصية
                    <v-icon class="me-2"
                      >mdi-card-account-details-outline</v-icon
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>
                    تسجيل خروج
                    <v-icon class="me-2">mdi-logout-variant</v-icon>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <Safe
      v-if="openSafe"
      :openPopup="openSafe"
      @closePopup="openSafe = false"
    />
  </div>
</template>

<script setup>
import AppSideDrawer from "./AppSideDrawer.vue";
import { authStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

// Init Store
const loginStore = authStore();

// Props
const props = defineProps(["currentWidth"]);

// Init Router
const router = useRouter();
// Data
const { loggerData, token, selected_granary } = storeToRefs(loginStore);
const openSafe = ref(false);

// Event bus
const { $event } = useNuxtApp();

// Methods
const openDrawer = () => {
  $event("openDashboardDrawer");
};

const logout = () => {
  useCookie("logger").value = undefined;
  setTimeout(() => {
    router.push({ name: "signin" });
    setTimeout(() => {
      loggerData.value = {};
      token.value = null;
      selected_granary.value = null;
      useCookie("selected_granary").value = null;
    }, 200);
  }, 100);
};

const changeGranary = () => {
  setTimeout(() => {
    useCookie("selected_granary").value = selected_granary.value[0];
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }, 100);
};
</script>

<style lang="scss">
#profile_menu {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  .v-list-item {
    .v-list-item-title {
      font-size: 13px !important;
      color: rgba(0, 0, 0, 0.718);
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgba(138, 138, 138, 0.218);
    }
  }
}
</style>
