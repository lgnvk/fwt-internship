import type { Meta, StoryObj } from '@storybook/vue3'
import BackToTopButton from './BackToTopButton.vue'
import { Theme } from '@/theme'
import type { PropsType } from './types'

const meta = {
  title: 'ui/buttons/BackToTopButton',
  component: BackToTopButton
} satisfies Meta<typeof BackToTopButton>

export default meta
type Story = StoryObj<typeof BackToTopButton>

const renderFunction = (args: PropsType) => ({
  components: { BackToTopButton },
  setup() {
    return { args }
  },
  template: '<BackToTopButton v-bind="args"/>'
})

export const BackToTopButtonDark: Story = {
  render: renderFunction,
  args: {
    theme: Theme.dark
  }
}

export const BackToTopButtonLight: Story = {
  render: renderFunction,
  args: {
    theme: Theme.light
  }
}
