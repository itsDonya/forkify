<template>
  <input
    type="text"
    v-model="recipe"
    class="w-72 h-full px-4 bg-transparent"
    placeholder="Search over 1,000,000 recipes..."
  />
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<script setup>
import { computed, useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// computed
const recipe = computed({
  get() {
    return store.state.recipeTitle;
  },
  set(value) {
    // update recipe title (in store) on every change
    store.dispatch("updateRecipeTitle", value);
  },
});
</script>
