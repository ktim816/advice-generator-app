<template>
  <main :class="[$style.wrapper]">
    <AdviceGenerator />
  </main>
</template>

<script setup lang="ts">
import AdviceGenerator from '@components/AdviceGenerator.vue';
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen px-4 py-8;
}
</style>
