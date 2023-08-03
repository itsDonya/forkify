<template>
  <div class="w-full min-h-full flex flex-col items-center justify-start gap-4">
    <!-- image & title -->
    <section
      class="relative w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-orange before:to-peach before:z-20 before:opacity-60"
    >
      <!-- title -->
      <h1 class="recipe-title">
        <span>
          {{ recipe.title }}
        </span>
      </h1>

      <!-- image -->
      <img
        class="w-full max-w-full h-72 object-cover"
        :src="recipe.image_url"
        alt=""
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "TheRecipe",
};
</script>

<script setup>
import { computed, useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// computed
const recipe = computed(() => {
  return store.getters.getRecipe;
});
</script>

<style scoped>
.recipe-title {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%) skewY(-8deg);
  color: #fff;
  font-weight: 700;
  font-size: 2.2rem;
  text-transform: uppercase;
  width: 50%;
  line-height: 1.7;
  text-align: center;
  z-index: 30;
}
.recipe-title span {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.6rem 2rem;
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
}
</style>
