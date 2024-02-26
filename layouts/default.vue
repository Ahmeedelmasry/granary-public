<template>
  <div class="layout_page">
    <!-- Dashboard Layout -->
    <v-layout class="position-relative">
      <DashboardNav
        :currentWidth="currentWidth"
        v-if="route.name != 'signin'"
      />
      <v-main
        :style="`background: rgb(239 239 239 / 43%) !important;
         min-height: ${currentHeight}px`"
      >
        <slot></slot>
      </v-main>
    </v-layout>
    <!-- Dashboard Layout -->
  </div>
</template>

<script setup>
import DashboardNav from "./DashboardNav.vue";

const currentWidth = ref(1200);
const currentHeight = ref(800);
const currentOffset = ref(0);
const showToolTip = ref(true);
const route = useRoute();

const checkScroll = () => {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > currentOffset.value) {
      showToolTip.value = false;
    } else {
      showToolTip.value = true;
    }
    currentOffset.value = document.documentElement.scrollTop;
  });
};

const checkWidth = () => {
  currentWidth.value = window.innerWidth;
  currentHeight.value = window.innerHeight;
  window.addEventListener("resize", () => {
    currentWidth.value = window.innerWidth;
  });
};

// Hooks
onMounted(() => {
  checkScroll();
  checkWidth();
});
</script>
