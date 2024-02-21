import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DatePicker, { DatePickerProps } from './DatePicker'
import dayjs, { Dayjs } from 'dayjs'

// Meta information for the stories
const meta: Meta<DatePickerProps> = {
  title: 'DatePicker',
  component: DatePicker,
  args: {
    onCancel: () => {
      console.log('Canceled')
    },
  },
}

// Export the meta information
export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Define the story for the DatePicker component
export const Default: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

    return (
      <DatePicker
        value={selectedDate}
        setValue={setSelectedDate}
        onCancel={args.onCancel}
      />
    )
  },
}

// Define the story for the DatePicker component with a pre-selected date
export const WithPreSelectedDate: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
      dayjs('2022-12-31')
    )

    return (
      <DatePicker
        value={selectedDate}
        setValue={setSelectedDate}
        onCancel={args.onCancel}
      />
    )
  },
}

// Define the story for the DatePicker component with a specific date
export const WithSpecificDate: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
      dayjs('2022-06-15')
    )

    return (
      <DatePicker
        value={selectedDate}
        setValue={setSelectedDate}
        onCancel={args.onCancel}
      />
    )
  },
}
