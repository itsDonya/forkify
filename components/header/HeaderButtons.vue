<template>
  <div class="relative h-full flex items-center justify-center gap-2">
    <header-button icon="pen-to-square-regular" @click="toggleModal"
      >add recipe</header-button
    >
    <header-button icon="bookmark-regular" class="peer"
      >bookmarks</header-button
    >

    <!-- menu: bookmarks -->
    <app-bookmarks></app-bookmarks>
  </div>
</template>

<script>
export default {
  name: "HeaderButtons",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
// methods
const toggleModal = () => {
  store.dispatch("toggleNewRecipeModal");
};
</script>
