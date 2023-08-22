<template>
  <div
    @click.self="close"
    class="absolute w-screen h-screen bg-black/60 flex items-center justify-center z-50"
  >
    <div
      class="w-[70vw] h-[76vh] px-40 py-12 rounded-xl bg-zinc-50 flex flex-col items-center justify-center gap-8 shadow-2xl shadow-black"
    >
      <base-error v-if="$store.state.modalError.length"
        >Uploads disabled. Build your application with your own API key
        ;)</base-error
      >

      <template v-else>
        <slot></slot>

        <button
          @click="setModalError"
          class="h-16 px-8 text-white bg-gradient-to-br from-orange to-peach rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all duration-300"
        >
          <span class="uppercase">upload (disabled)</span>
          <base-icon
            name="cloud-arrow-up-solid"
            class="w-6 h-6 fill-white"
          ></base-icon>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// emits
const emit = defineEmits(["close"]);

// variables
const store = useStore();

// methods
const close = () => emit("close");
const setModalError = () => store.dispatch("setModalError");
</script>
