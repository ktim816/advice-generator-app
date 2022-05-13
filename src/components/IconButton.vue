<template>
  <button :class="[$style.wrapper]">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.wrapper {
  @apply inline-flex justify-center items-center rounded-full bg-neon-green text-dark-blue w-16 h-16 transition-shadow;

  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }
}
</style>
