<template>
  <base-modal @close="close">
    <div
      class="w-full h-full grid grid-cols-2 items-center justify-center gap-4"
    >
      <!-- recipe data -->
      <new-recipe-data></new-recipe-data>

      <!-- ingredients -->
      <new-recipe-ingredients></new-recipe-ingredients>
    </div>
  </base-modal>
</template>

<script setup>
// emit
const emit = defineEmits(["close"]);

// methods
const close = () => emit("close");
</script>
