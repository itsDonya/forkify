<template>
  <article class="w-full h-full">
    <!-- show loading icon while fetching recipes -->
    <base-icon
      v-if="$store.state.recipeLoading"
      class="w-32 opacity-40"
      name="animated-loading"
    ></base-icon>

    <app-error v-else-if="!recipe" class="mx-auto my-6 inline-block max-w-max">
      Start by searching for a recipe or an ingredient. Have fun!
    </app-error>

    <the-recipe v-else></the-recipe>
  </article>
</template>

<script>
export default {
  name: "RecipeSection",
};
</script>

<script setup>
import {
  ref,
  watch,
  useRoute,
  useStore,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

// variables
const store = useStore();
const route = useRoute();
const id = ref(null);

// computed
const recipe = computed(() => {
  return store.getters.getRecipe;
});

// lifecycles
onMounted(() => {
  id.value = route.value.params.id;
});

// watchers
watch(
  () => route.value.params.id,
  (newVal) => {
    id.value = newVal;
  }
);
watch(
  () => id.value,
  (newval) => {
    if (newval) {
      store.commit("setRecipeLoading", true);
      store.dispatch("getRecipe", newval);
    }
  }
);
</script>
