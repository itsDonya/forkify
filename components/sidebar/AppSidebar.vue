<template>
  <div
    class="w-96 h-full bg-white max-h-full overflow-y-auto overflow-x-hidden"
  >
    <!-- show error if server returned an error  -->
    <app-error v-if="$store.state.recipesError.length">{{
      $store.state.recipesError
    }}</app-error>

    <!-- single recipe -->
    <recipe-item
      :to="'/' + recipe.recipe_id"
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
    ></recipe-item>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<script setup>
import { useStore, computed } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// computed
const recipes = computed(() => {
  return store.getters.allRecipes;
});
</script>
