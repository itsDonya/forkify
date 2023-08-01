<template>
  <div
    class="w-64 h-full bg-white max-h-full overflow-y-auto overflow-x-hidden"
  >
    <nuxt-link to="/" v-for="(recipe, i) in recipes" :key="i">
      <div
        class="w-full p-4 hover:bg-gray-200/20 transition-all flex items-center justify-start gap-3"
      >
        <img :src="recipe.img" class="w-10" alt="fatoush salad" />
        <div class="flex flex-col items-start justify-center">
          <p class="uppercase text-sm text-peach">{{ recipe.title }}</p>
          <p class="uppercase text-[10px] text-gray-400">
            {{ recipe.description }}
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
import { ref } from "@nuxtjs/composition-api";

// variables
const recipes = ref([
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
  {
    title: "FATOUSH SALAD",
    description: "WHAT'S GABY COOKINGs",
    img: "/favicon.png",
  },
]);
</script>
