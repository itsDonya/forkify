<template>
  <nuxt-link :to="`/${bookmarkData.id}`" class="w-full">
    <div
      class="w-full p-4 hover:bg-gray-200/20 transition-all flex items-center justify-start gap-3"
    >
      <img
        :src="bookmarkData.image"
        class="w-10 rounded-full"
        :alt="bookmarkData.title"
      />
      <div class="flex flex-col items-start justify-center">
        <p class="uppercase text-sm text-peach">{{ bookmarkData.title }}</p>
        <p class="uppercase text-[10px] text-gray-400">
          {{ bookmarkData.publisher }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "BookmarkItem",
};
</script>

<script setup>
const props = defineProps({
  bookmarkData: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
