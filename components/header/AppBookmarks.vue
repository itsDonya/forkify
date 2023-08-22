<template>
  <div
    class="absolute top-6 w-64 bg-zinc-50 shadow-xl rounded-lg hidden peer-hover:flex hover:flex transition-all flex-col items-center justify-start z-40"
  >
    <bookmark-item
      v-for="(bookmark, i) in bookmarks"
      :key="i"
      :bookmark-data="bookmark"
    ></bookmark-item>
  </div>
</template>

<script>
export default {
  name: "AppBookmarks",
};
</script>

<script setup>
import { useStore, computed } from "@nuxtjs/composition-api";

// varuables
const store = useStore();

// computed
const bookmarks = computed(() => {
  return store.state.bookmarks;
});
</script>
