import type { Meta, StoryObj } from '@storybook/vue3'

import UnderlinedButton from './UnderlinedButton.vue'
import { Theme } from '@/theme'
import type { PropsType } from './types'

const meta = {
  title: 'ui/buttons/UnderlinedButton',
  component: UnderlinedButton
} satisfies Meta<typeof UnderlinedButton>

export default meta
type Story = StoryObj<typeof UnderlinedButton>

const renderFunction = (args: PropsType) => ({
  components: { UnderlinedButton },
  setup() {
    return { args }
  },
  template: '<UnderlinedButton v-bind="args">text</UnderlinedButton>'
})

export const UnderlinedButtonDark: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}

export const UnderlinedButtonLight: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}
