<template>
  <div class="global_alert">
    <v-dialog v-model="globalAlert" max-width="500">
      <v-card class="card text-center pt-3 pb-7 px-4">
        <div class="text-center mb-2">
          <v-icon
            v-if="globalAlertType == 'alert'"
            size="70"
            class="global_icon"
            color="orange"
            >mdi-alert</v-icon
          >
          <v-icon
            v-if="globalAlertType == 'error'"
            size="70"
            class="global_icon"
            color="red"
            >mdi-close</v-icon
          >
          <v-icon
            v-if="globalAlertType == 'success'"
            size="70"
            color="green"
            class="global_icon"
            >mdi-check-bold</v-icon
          >
        </div>
        <h3
          :style="`white-space: nowrap; font-size: 22px; color: ${
            globalAlertType == 'error'
              ? '#F44336'
              : globalAlertType == 'success'
              ? 'green'
              : 'orange'
          }`"
          class="mb-2"
        >
          {{ globalAlertTitle }}
        </h3>
        <p style="font-size: 19px; color: rgb(138, 138, 138)" class="my-1">
          {{ globalAlertText }}
        </p>
        <div
          class="text-center d-flex justify-center align-center"
          style="gap: 10px"
        >
          <v-btn
            class="mt-5"
            width="100"
            @click="globalAlert = false"
            color="blue"
            style="
              height: 44px;
              text-transform: capitalize;
              font-size: 16px;
              letter-spacing: 0px;
            "
            elevation="0"
            >{{ btn_text }}</v-btn
          >

          <v-btn
            class="mt-5"
            width="100"
            @click="delItem"
            color="red"
            style="
              height: 44px;
              text-transform: capitalize;
              font-size: 16px;
              letter-spacing: 0px;
            "
            elevation="0"
            :loading="loading"
            >حذف</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { mainStore } from "@/stores";
import { storeToRefs } from "pinia";

// Init Store
const mainModule = mainStore();

// Data
const {
  globalAlert,
  globalAlertTitle,
  globalAlertText,
  globalAlertType,
  btn_text,
  regetData,
} = storeToRefs(mainModule);

const loading = ref(false);

const emits = defineEmits(["regetData"]);

// Methods
const delItem = async () => {
  loading.value = true;
  const res = await mainModule.doDeleteItem();
  loading.value = false;
  if (res) {
    regetData.value = true;
    setTimeout(() => {
      regetData.value = false;
    }, 500);
  }
  globalAlert.value = false;
  globalAlertType.value = "";
  globalAlertTitle.value = "";
  globalAlertText.value = "";
};
</script>

<style lang="scss">
.global_icon {
  padding: 40px;
  border: 1px solid;
  border-radius: 50%;
}
</style>
