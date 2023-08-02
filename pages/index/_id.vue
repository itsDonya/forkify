<template>
  <app-error v-if="!recipe">Error</app-error>
  <h1 v-else>{{ id }}</h1>
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
    store.dispatch("getRecipe", newval);
  }
);
</script>
