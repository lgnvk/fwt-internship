<script setup lang="ts">
import type { PropsType } from './types'
const props = defineProps<PropsType>()
</script>
<template>
  <button class="base-button" :class="[props.theme, { disabled: props.disabled }]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  @include button;
  width: 200px;
  height: 48px;
  cursor: pointer;
  border-radius: 60px;
  color: var(--primary-white);
  &.dark {
    background-color: var(--accent-gold);
    &:not(.disabled) {
      &:hover,
      &:focus {
        box-shadow: 0 4px 10px 0 #ab895640;
      }
      &:focus {
        background-color: #ba9052;
      }
    }
  }
  &.light {
    background-color: var(--primary-black);
    &:not(.disabled) {
      &:hover,
      &:focus {
        box-shadow: 0 4px 10px 0 #00000040;
      }
      &:focus {
        background-color: #232323;
      }
    }
  }
  &.disabled {
    opacity: 0.5;
    cursor: unset;
  }
}
</style>
