import { Meta, StoryObj } from '@storybook/react'
import CookieAlert, { CookiePropType } from './CookieAlert'

// Meta information for the stories
const meta: Meta<CookiePropType> = {
  title: 'CookieAlert',
  component: CookieAlert,
}

// Export the meta information
export default meta

// Define the type for the story
type Story = StoryObj<typeof meta>

// Define the story for the CookieAlert component
export const Default: Story = {
  render: ({ onAcceptAllCookie, onAcceptNecessaryCookie }) => (
    <CookieAlert
      onAcceptAllCookie={onAcceptAllCookie}
      onAcceptNecessaryCookie={onAcceptNecessaryCookie}
    />
  ),
}
