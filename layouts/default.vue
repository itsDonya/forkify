<template>
  <main
    class="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange to-peach font-nunito"
  >
    <nuxt />

    <new-recipe-modal></new-recipe-modal>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
