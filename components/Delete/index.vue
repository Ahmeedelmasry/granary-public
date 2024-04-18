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
        >
          {{ globalAlertTitle }}
        </h3>
        <p style="font-size: 19px; color: rgb(138, 138, 138)" class="mt-1">
          {{ globalAlertText }}
        </p>
        <div class="text-center">
          <v-btn
            class="mt-5"
            width="200"
            @click="globalAlert = false"
            style="
              background-color: rgb(255, 115, 0);
              height: 44px;
              color: white;
              text-transform: capitalize;
              font-size: 16px;
              letter-spacing: 0px;
            "
            elevation="0"
            >{{ btn_text }}</v-btn
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
} = storeToRefs(mainModule);
</script>

<style lang="scss">
.global_icon {
  padding: 40px;
  border: 1px solid;
  border-radius: 50%;
}
</style>
