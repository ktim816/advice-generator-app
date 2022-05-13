<template>
  <div :class="[$style.wrapper]">
    <h3 v-if="slip.id" :class="[$style.pretitle]">Advice #{{ slip.id }}</h3>
    <p v-if="slip.advice" :class="[$style.description]">"{{ slip.advice }}"</p>
    <img :src="dividerDesktop" class="mt-10 hidden xs:block" />
    <img :src="dividerMobile" class="mt-6 xs:hidden" />
    <IconButton :class="[$style.button]" @click="_getRandomAdvice">
      <DiceIcon />
    </IconButton>
  </div>
</template>

<script lang="ts" setup>
import {getImage} from '@helpers/common';
import IconButton from './IconButton.vue';
import DiceIcon from '@icons/icon-dice.svg';
import dividerDesktop from '@images/pattern-divider-desktop.svg?url';
import dividerMobile from '@images/pattern-divider-desktop.svg?url';
import {getRandomAdvice, Advice} from '@api/advice';
import {onMounted, ref} from 'vue';

const slip = ref<Advice['slip']>({});

const _getRandomAdvice = async () => {
  const advice = await getRandomAdvice();

  if (advice) {
    slip.value = advice.slip;
  }
};

onMounted(_getRandomAdvice);
</script>

<style lang="scss" module>
.wrapper {
  @apply relative bg-dark-grayish-blue rounded-2xl px-6 xs:px-12 pt-10 xs:pt-12 pb-16 xs:pb-18 max-w-xl text-center;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
}
.pretitle {
  @apply font-extrabold text-neon-green uppercase text-xs xs:text-sm tracking-widest;
}
.description {
  @apply font-extrabold text-light-cyan text-2xl xs:text-2.5xl tracking-tight mt-6;
}
.button {
  @apply absolute bottom-0 left-2/4 transform translate-y-2/4 -translate-x-2/4;
}
</style>
