import type { Meta, StoryObj } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'
import { Theme } from '@/theme'

const meta = {
  component: BaseButton
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof BaseButton>

export const BaseButtonDark: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Test</BaseButton>'
  }),
  args: {
    theme: Theme.dark
  }
}

export const BaseButtonLigth: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Test</BaseButton>'
  }),
  args: {
    theme: Theme.light
  }
}
