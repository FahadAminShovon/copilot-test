import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ToggleButtonGroup from './ToggleButtonGroup'
type ToggleType = 'round-trip' | 'one-way'

// Meta information for the stories
const meta: Meta = {
  title: 'ToggleButtonGroup',
  component: ToggleButtonGroup,
}

// Export the meta information
export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Define the story for the ToggleButtonGroup component
export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<ToggleType>('one-way')

    return (
      <ToggleButtonGroup
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        buttons={[
          { label: 'Round Trip', value: 'round-trip' },
          { label: 'One Way', value: 'one-way' },
        ]}
      />
    )
  },
}

// Define another story with pre-selected value
export const WithSelectedValue: Story = {
  render: () => (
    <ToggleButtonGroup
      selectedValue="round-trip"
      setSelectedValue={() => {}}
      buttons={[
        { label: 'Round Trip', value: 'round-trip' },
        { label: 'One Way', value: 'one-way' },
      ]}
    />
  ),
}
