<template>
  <main
    class="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange to-peach font-nunito"
  >
    <nuxt />

    <new-recipe-modal
      v-if="$store.state.newRecipeModal"
      @close="toggleModal"
    ></new-recipe-modal>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// methods
const toggleModal = () => store.dispatch("toggleNewRecipeModal");
</script>
