<template>
  <div class="m-4 flex items-start justify-start gap-2">
    <base-icon
      name="info-solid"
      class="min-w-[1.5rem] min-h-[1.5rem] max-w-[1.5rem] max-h-[1.5rem] p-1 fill-peach border-2 rounded-full border-peach"
    ></base-icon>
    <p class="text-zinc-500">
      <slot></slot>
    </p>
  </div>
</template>
