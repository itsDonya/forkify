<template>
  <nuxt-link :to="'/' + recipe.id">
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
</template>

<script>
export default {
  name: "RecipeItem",
};
</script>

<script setup>
// props
const props = defineProps({
  recipe: {
    type: Object,
    default: function () {
      return {};
    },
  },
});
</script>
