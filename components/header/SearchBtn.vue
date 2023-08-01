<template>
  <button
    @click.prevent="getRecipes"
    class="h-full px-8 text-white bg-gradient-to-br from-orange to-peach rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
  >
    <base-icon name="magnify-solid" class="w-4 h-4 fill-white"></base-icon>
    <span class="uppercase text-sm">search</span>
  </button>
</template>

<script>
export default {
  name: "SearchButton",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";
// variables
const store = useStore();

// methods
const getRecipes = () => {
  store.dispatch("getRecipes");
};
</script>
