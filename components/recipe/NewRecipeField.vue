<template>
  <label class="w-full flex items-center justify-start gap-4">
    <span class="w-28">
      <slot></slot>
    </span>
    <input
      type="text"
      placeholder="Format: 'Quantity,Unit,Description'"
      class="w-56 px-3 py-1.5 text-sm border-[1px] border-zinc-300 bg-none rounded-md focus:border-peach focus:bg-peach/10 transition-all duration-300 placeholder:text-peach/50"
    />
  </label>
</template>
