import type { Meta, StoryObj } from '@storybook/react'
import Counter, { CounterProps } from './Counter'

const meta: Meta<CounterProps> = {
  title: 'Counter',
  component: Counter,
}

export default meta

type Story = StoryObj<typeof meta>

export const WithLabelAndCaption: Story = {
  args: {
    label: 'Counter Label',
    caption: 'Counter Caption',
    value: 5,
    onIncrement: () => console.log('Increment'),
    onDecrement: () => console.log('Decrement'),
  },
}

export const WithLabelWithoutCaption: Story = {
  args: {
    label: 'Counter Label',
    value: 5,
    onIncrement: () => console.log('Increment'),
    onDecrement: () => console.log('Decrement'),
  },
}

export const WithoutLabelWithCaption: Story = {
  args: {
    caption: 'Counter Caption',
    value: 5,
    onIncrement: () => console.log('Increment'),
    onDecrement: () => console.log('Decrement'),
  },
}

export const WithoutLabelAndCaption: Story = {
  args: {
    value: 5,
    onIncrement: () => console.log('Increment'),
    onDecrement: () => console.log('Decrement'),
  },
}
