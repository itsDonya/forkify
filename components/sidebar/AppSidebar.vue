<template>
  <div
    class="w-96 h-full bg-white max-h-full overflow-y-auto overflow-x-hidden"
  >
    <p v-if="$store.state.recipesError.length" class="m-4 text-zinc-500">
      {{ $store.state.recipesError }}
    </p>
    <nuxt-link
      :to="'/' + recipe.recipe_id"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <div
        class="w-full p-4 hover:bg-gray-200/20 transition-all flex items-center justify-start gap-3 hover:-translate-y-0.5 duration-300"
      >
        <img
          :src="recipe.image_url"
          class="w-12 h-12 rounded-full"
          alt="fatoush salad"
        />
        <div class="flex flex-col items-start justify-center">
          <p class="uppercase text-sm text-peach">{{ recipe.title }}</p>
          <p class="uppercase text-[10px] text-gray-400">
            {{ recipe.publisher }}
          </p>
        </div>
      </div>
    </nuxt-link>
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
