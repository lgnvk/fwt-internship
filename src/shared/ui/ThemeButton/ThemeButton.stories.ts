import type { Meta, StoryObj } from '@storybook/vue3'

import ThemeButton from './ThemeButton.vue'
import { Theme } from '@/theme'
import type { Props } from './ThemeButton.vue'

const meta = {
  component: ThemeButton
} satisfies Meta<typeof ThemeButton>

export default meta
type Story = StoryObj<typeof ThemeButton>

const renderFunction = (args: Props) => ({
  components: { ThemeButton },
  setup() {
    return { args }
  },
  template: '<ThemeButton v-bind="args" />'
})

export const ThemeButtonDark: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}

export const ThemeButtonDarkWithText: Story = {
  render: renderFunction,
  args: {
    ...ThemeButtonDark.args,
    withText: true,
  }
}

export const ThemeButtonLight: Story = {
  render: renderFunction,
  args: {
    theme: Theme.light
  }
}

export const ThemeButtonLightWithText: Story = {
  render: renderFunction,
  args: {
    ...ThemeButtonLight.args,
    withText: true,
  }
}
