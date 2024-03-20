import type { Meta, StoryObj } from '@storybook/vue3'

import IconButton from './IconButton.vue'
import { Theme } from '@/theme'
import type { Props } from './types'

const meta = {
  component: IconButton
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

const renderFunction = (args: Props) => ({
  components: { IconButton },
  setup() {
    return { args }
  },
  template: '<IconButton v-bind="args" />'
})

export const IconButtonDark: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}

export const IconButtonOverImageDark: Story = {
  render: renderFunction,
  args: {
    ...IconButtonDark.args,
    overImage: true,
  }
}

export const IconButtonLight: Story = {
  render: renderFunction,
  args: {
    theme: Theme.light
  }
}

export const IconButtonOverImageLight: Story = {
  render: renderFunction,
  args: {
    ...IconButtonLight.args,
    overImage: true,
  }
}