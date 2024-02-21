import { Meta, StoryObj } from '@storybook/react'
import AutoComplete, { AutoCompletePropType, OptionsType } from './AutoComplete'

// Meta information for the stories
const meta: Meta<AutoCompletePropType<OptionsType, false>> = {
  title: 'AutoComplete',
  component: AutoComplete,
}

export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Sample options for the autocomplete
const options: OptionsType[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

// Define the story for the AutoComplete component
export const Default: Story = {
  render: () => (
    <AutoComplete
      options={options}
      label="AutoComplete"
      labelKey="label"
      placeholder="Select an option"
      variant="outlined"
      alignment="left"
    />
  ),
}

// Define the story for the AutoComplete component with multiple options
export const MultipleOptions: Story = {
  render: () => (
    <AutoComplete
      options={options}
      label="AutoComplete"
      labelKey="label"
      placeholder="Select one or more options"
      variant="outlined"
      alignment="left"
    />
  ),
}

// Define the story for the AutoComplete component with custom render options
export const WithCustomRenderOptions: Story = {
  render: () => (
    <AutoComplete
      options={options}
      label="AutoComplete"
      labelKey="label"
      placeholder="Select an option"
      variant="outlined"
      alignment="left"
      renderOption={(props, data) => <div>{data.label}</div>}
    />
  ),
}
