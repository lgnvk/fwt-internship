<script setup lang="ts">
import DarkThemeIcon from '@/assets/icons/DarkThemeIcon.vue'
import LightThemeIcon from '@/assets/icons/LigthThemeIcon.vue'
import { Theme } from '@/theme'
import { computed } from 'vue'
export interface Props {
  theme: Theme,
  withText?: Boolean
}
const props = defineProps<Props>()

const text = computed(() => {
  return props.theme === Theme.dark ? 'Light Mode' : 'Dark Mode'
})
</script>
<template>
  <button class="theme-button" :class="props.theme">
    <div class="theme-button__elipse">
      <DarkThemeIcon v-if="props.theme === Theme.light"/>
      <LightThemeIcon v-else/>
    </div>
    <span v-if="props.withText">{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.theme-button {
  @include button;
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  &__elipse {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
  &.dark {
    color: var(--primary-light-gray);
    .theme-button__elipse {
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
    .theme-button__elipse {
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
