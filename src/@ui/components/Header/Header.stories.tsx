import type { Meta, StoryObj } from '@storybook/react'
import HeaderStory from './Header'

const meta: Meta = {
  title: 'Header',
  component: HeaderStory,
}

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {}
