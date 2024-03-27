<script setup lang="ts">
import type { PropsType } from './types'
import PlusIcon from '@/assets/icons/PlusIcon.vue'

const props = defineProps<PropsType>()
</script>

<template>
  <button class="underlined-button" :class="[props.theme, { disabled: props.disabled }]">
    <PlusIcon />
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.underlined-button {
  @include button;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: underline;

  &.dark {
    color: var(--primary-light-gray);

    svg {
      fill: var(--primary-light-gray);
    }

    &:hover,
    &:focus {
      &:not(.disabled) {
        cursor: pointer;
        color: var(--primary-white);

        svg {
          fill: var(--primary-white);
        }
      }
    }
    &.disabled {
      cursor: auto;
      color: var(--secondary-gray);

      svg {
        fill: var(--secondary-gray);
      }
    }
  }

  &.light {
    color: var(--primary-dark-gray);

    svg {
      fill: var(--primary-dark-gray);
    }

    &:hover,
    &:focus {
      &:not(.disabled) {
        cursor: pointer;
        color: var(--primary-black);

        svg {
          fill: var(--primary-black);
        }
      }
    }
    &.disabled {
      cursor: auto;
      color: var(--primary-light-gray);

      svg {
        fill: var(--primary-light-gray);
      }
    }
  }
}
</style>
