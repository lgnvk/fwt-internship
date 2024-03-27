<script setup lang="ts">
import type { PropsType } from './types'
import ArrowIcon from '@/assets/icons/ArrowIconDefault.vue'

const props = defineProps<PropsType>()
</script>

<template>
  <button class="back-to-top-button" :class="[props.theme]"><ArrowIcon /></button>
</template>

<style scoped lang="scss">
.back-to-top-button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(-90deg);
  }

  &:hover {
    cursor: pointer;
  }

  &.dark {
    background-color: var(--secondary-black);
    svg {
      fill: var(--primary-light-gray);
    }
    &:hover {
      background-color: rgba(36, 34, 34, 1);
    }
  }
  &.light {
    border: 1px solid var(--primary-light-gray);
    background-color: var(--secondary-white);
    svg {
      fill: var(--primary-dark-gray);
    }
    &:hover {
      background-color: var(--primary-white);
    }
  }
}
</style>
