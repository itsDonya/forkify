<template>
  <div
    class="absolute top-6 w-64 bg-zinc-50 shadow-xl rounded-lg hidden peer-hover:flex hover:flex transition-all flex-col items-center justify-start"
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
import { ref } from "@nuxtjs/composition-api";

const bookmarks = ref([
  {
    img: "/favicon.png",
    title: "fatoush salad",
    description: "what's gaby cooking",
  },
  {
    img: "/favicon.png",
    title: "fatoush salad",
    description: "what's gaby cooking",
  },
  {
    img: "/favicon.png",
    title: "fatoush salad",
    description: "what's gaby cooking",
  },
]);
</script>
