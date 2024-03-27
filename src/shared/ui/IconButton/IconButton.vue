<script setup lang="ts">
import type { PropsType } from './types'
import TrashIcon from '@/assets/icons/TrashIcon.vue'

const props = defineProps<PropsType>()
</script>

<template>
  <button
    class="icon-button"
    :class="[props.theme, { disabled: props.disabled, overImage: props.overImage }]"
  >
    <slot><TrashIcon /></slot>
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.dark {
    background-color: var(--secondary-black);
    svg {
      fill: var(--primary-light-gray);
    }
    &.disabled {
      cursor: unset;
      svg {
        fill: var(--primary-dark-gray);
      }
    }
    &:hover,
    &:focus {
      &:not(.disabled) {
        svg {
          fill: var(--primary-white);
        }
      }
    }
  }
  &.light {
    background-color: var(--secondary-white);
    svg {
      fill: var(--primary-dark-gray);
    }
    &.disabled {
      cursor: unset;
      svg {
        fill: var(--primary-light-gray);
      }
    }
    &:hover,
    &:focus {
      &:not(.disabled) {
        svg {
          fill: var(--primary-black);
        }
      }
    }
  }
  &.overImage {
    background-color: unset;
    &.dark {
      &.disabled {
        svg {
          fill: var(--primary-dark-gray);
        }
      }
      &:not(.disabled) {
        &:hover,
        &:focus {
          svg {
            fill: var(--primary-light-gray);
          }
        }
      }
    }
    &.light {
      &.disabled {
        svg {
          fill: var(--primary-light-gray);
        }
      }
      &:not(.disabled) {
        &:hover,
        &:focus {
          svg {
            fill: var(--primary-dark-gray);
          }
        }
      }
    }
  }
}
</style>
