import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CheckboxToggle, { CheckboxOptionType } from './CheckboxToggle'

// Meta information for the stories
const meta: Meta = {
  title: 'CheckboxToggle',
  component: CheckboxToggle,
}

// Export the meta information
export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Sample options for the checkboxes
const options: CheckboxOptionType<string>[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

// Define the story for the CheckboxToggle component
export const Default: Story = {
  args: {
    label: 'Checkbox Options',
    options: options,
  },
  argTypes: {
    setSelectedValue: { action: 'selected' },
  },
}

// Define the story for the CheckboxToggle component with checkboxes in a row
export const Row: Story = {
  args: {
    label: 'Checkbox Options (Row)',
    options: options,
    row: true,
  },
  argTypes: {
    setSelectedValue: { action: 'selected' },
  },
}

// Define the story for the CheckboxToggle component with pre-selected value
export const WithSelectedValue: Story = {
  args: {
    label: 'Checkbox Options (Selected)',
    options: options,
    selectedValue: 'option2',
  },
  argTypes: {
    setSelectedValue: { action: 'selected' },
  },
}
