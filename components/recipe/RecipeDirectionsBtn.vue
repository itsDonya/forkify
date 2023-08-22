<template>
  <a
    :href="href"
    class="h-12 px-8 text-white bg-gradient-to-br from-orange to-peach rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
  >
    <span class="uppercase text-sm">directions</span>

    <base-icon name="arrow-right-solid" class="w-4 h-4 fill-white"></base-icon>
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: "/",
    required: true,
  },
});
</script>
