<script setup lang="ts">
import { computed } from 'vue'
import { Theme } from '@/theme'
import type { PropsType } from './types'
import DarkThemeIcon from '@/assets/icons/DarkThemeIcon.vue'
import LightThemeIcon from '@/assets/icons/LigthThemeIcon.vue'

const props = defineProps<PropsType>()

const text = computed(() => {
  return props.theme === Theme.light ? 'Dark Mode' : 'Light Mode'
})
</script>
<template>
  <div class="theme-button" :class="props.theme">
    <button class="theme-button__circle">
      <DarkThemeIcon v-if="props.theme === Theme.light" />
      <LightThemeIcon v-else />
    </button>
    <span v-if="props.withText">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.theme-button {
  @include button;
  display: flex;
  gap: 12px;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  &__circle {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
  &.dark {
    color: var(--primary-light-gray);
    .theme-button__circle {
      background-color: var(--secondary-black);
    }
    svg {
      fill: var(--primary-light-gray);
    }
    &:hover {
      color: var(--primary-white);
      svg {
        fill: var(--primary-white);
      }
    }
  }
  &.light {
    color: var(--primary-dark-gray);
    .theme-button__circle {
      background-color: var(--secondary-white);
    }
    svg {
      fill: var(--primary-dark-gray);
    }
    &:hover {
      color: var(--primary-black);
      svg {
        fill: var(--primary-black);
      }
    }
  }
}
</style>
