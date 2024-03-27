import type { Meta, StoryObj } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'
import { Theme } from '@/theme'
import type { PropsType } from './types'

const meta = {
  title: 'ui/buttons/BaseButton',
  component: BaseButton
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof BaseButton>

const renderFunction = (args: PropsType) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args">Test</BaseButton>'
})

export const BaseButtonDark: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}

export const BaseButtonLigth: Story = {
  render: renderFunction,
  args: {
    theme: Theme.light
  }
}
