<template>
  <app-container>
    <nuxt-child></nuxt-child>
  </app-container>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import { useStore, onMounted } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// lifecycles
onMounted(() => {
  store.dispatch("getBookmarks");
});
</script>
