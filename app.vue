<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      vertical
      :color="callColor == 1 ? 'green' : 'red'"
      location="left bottom"
      :timeout="5000"
    >
      <div class="pb-2" style="font-size: 20px; font-weight: 500">
        {{ callColor == 1 ? "طلب مكتمل" : "طلب غير مكتمل" }}
      </div>

      <p style="font-size: 17px" class="mt-4">{{ callMsg }}</p>

      <template v-slot:actions>
        <v-btn
          :color="callColor == 1 ? 'green' : 'red'"
          variant="elevated"
          @click="snackbar = false"
        >
          اغلاق
        </v-btn>
      </template>
    </v-snackbar>
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>

<script setup>
import { mainStore } from "@/stores";
import { storeToRefs } from "pinia";

// Init Store
const mainModule = mainStore();
const snackbar = ref(false);

// Init Router
const router = useRouter();

// Store Data
const { callMsg, callSuccess, callColor } = storeToRefs(mainModule);
// const { lang } = storeToRefs(langModule);

// Watch
watch(
  () => callSuccess.value,
  (newVal) => {
    if (newVal) {
      if (snackbar.value) {
        snackbar.value = false;
      }
      setTimeout(() => {
        snackbar.value = true;
      }, 200);
    }
  }
);
watch(
  () => snackbar.value,
  (newVal) => {
    if (!newVal) {
      mainModule.resetSnackbar();
    }
  }
);
</script>

<style lang="scss">
@font-face {
  font-family: Cairo;
  src: url(./assets/fonts/Cairo-SemiBold.ttf);
}
.v-snackbar--vertical .v-snackbar__wrapper {
  align-items: baseline;
}
</style>
