import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'primary',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
    color: 'primary',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
    color: 'primary',
  },
}

export const Small: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'small',
    color: 'primary',
  },
}

export const Large: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    size: 'large',
    color: 'primary',
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    fullWidth: true,
    color: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    disabled: true,
    color: 'primary',
  },
}
