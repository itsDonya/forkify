<template>
  <button
    class="p-4 flex items-center justify-center gap-2 rounded-xl hover:bg-zinc-200/60 transition-all"
  >
    <base-icon :name="icon" class="w-5 h-5 fill-peach"></base-icon>
    <span class="uppercase text-neutral-600">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "HeaderButton",
};
</script>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
