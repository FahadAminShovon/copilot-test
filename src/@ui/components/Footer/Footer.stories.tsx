import { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

// Meta information for the stories
const meta: Meta = {
  title: 'Footer',
  component: Footer,
}

// Export the meta information
export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Define the story for the Footer component
export const Default: Story = {
  render: () => <Footer />,
}
