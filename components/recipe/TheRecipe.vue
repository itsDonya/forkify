<template>
  <div
    class="w-full max-h-full flex flex-col items-center justify-start gap-4 overflow-scroll"
  >
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

    <!-- time & servings -->
    <section class="w-full px-12 my-8 flex items-center justify-between">
      <div class="flex items-center justify-start gap-4">
        <!-- time -->
        <div class="flex items-center justify-center gap-1.5">
          <base-icon
            name="clock-regular"
            class="w-5 h-5 fill-peach"
          ></base-icon>
          <p class="uppercase text-neutral-600">
            {{ recipe.cooking_time }} minutes
          </p>
        </div>

        <!-- servings -->
        <div class="flex items-center justify-center gap-1.5">
          <base-icon name="user-regular" class="w-5 h-5 fill-peach"></base-icon>
          <p class="uppercase text-neutral-600">
            {{ recipe.servings }} servings
          </p>
        </div>

        <div class="flex items-center justify-center gap-2">
          <!-- increase servings -->
          <span
            @click="increaseServings"
            class="w-5 h-5 border-2 font-bold border-peach rounded-full flex items-center justify-center text-peach hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
            >+</span
          >

          <!-- decrease servings -->
          <span
            @click="decreaseServings"
            class="w-5 h-5 border-2 font-bold border-peach rounded-full flex items-center justify-center text-peach hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
            >-</span
          >
        </div>
      </div>

      <!-- bookmark -->
      <div
        class="w-12 h-12 p-2 flex items-center justify-center bg-gradient-to-br from-orange to-peach rounded-full hover:scale-105 transition-all cursor-pointer"
      >
        <base-icon
          name="bookmark-regular"
          class="w-6 h-6 fill-white"
        ></base-icon>
      </div>
    </section>

    <!-- ingredients -->
    <section
      class="w-full p-10 bg-zinc-100 flex flex-col items-center justify-start gap-6"
    >
      <h5 class="text-peach text-xl font-bold uppercase tracking-wider">
        recipe ingredients
      </h5>

      <div
        class="w-10/12 mt-8 mx-auto h-96s grid grid-cols-2 items-center justify-center gap-6"
      >
        <div
          v-for="(ingredient, i) in recipe.ingredients"
          :key="i"
          class="flex items-center justify-start gap-2"
        >
          <base-icon name="check-solid" class="w-4 fill-peach"></base-icon>
          <p>
            {{ ingredient.quantity }} {{ ingredient.unit }}
            {{ ingredient.description }}
          </p>
        </div>
      </div>
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

// methods
const increaseServings = () => {
  // TODO
};
const decreaseServings = () => {
  // TODO
};

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
  font-size: 2.1rem;
  text-transform: uppercase;
  width: 50%;
  line-height: 1.7;
  text-align: center;
  z-index: 30;
}
.recipe-title span {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.5rem 2rem;
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
}
::-webkit-scrollbar-thumb {
  background-color: #fbba89;
}
</style>
