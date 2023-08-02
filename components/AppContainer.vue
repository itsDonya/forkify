<template>
  <div
    class="w-10/12 h-[86vh] flex flex-col bg-zinc-100 rounded-xl shadow-xl overflow-hidden"
  >
    <app-header></app-header>

    <div class="w-full h-full flex items-start">
      <app-sidebar></app-sidebar>

      <slot></slot>
    </div>
  </div>
</template>
