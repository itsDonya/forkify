<template>
  <div
    class="w-[30rem] h-full bg-white max-h-full overflow-y-auto overflow-x-hidden"
  >
    <!-- show loading icon while fetching recipes -->
    <base-icon
      v-if="$store.state.loading"
      class="w-32 opacity-40"
      name="animated-loading"
    ></base-icon>

    <!-- show error if server returned an error  -->
    <app-error v-else-if="$store.state.recipesError.length">{{
      $store.state.recipesError
    }}</app-error>

    <!-- single recipe -->
    <template v-else>
      <recipe-item
        :to="'/' + recipe.recipe_id"
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      ></recipe-item>
    </template>
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
