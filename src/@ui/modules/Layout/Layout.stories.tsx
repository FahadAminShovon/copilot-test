import { Meta, StoryObj } from '@storybook/react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material'

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
}

type Story = StoryObj<typeof meta>

export const LayoutWithBackground: Story = {
  args: {
    children: (
      <Box>
        <Typography>dummy text</Typography>
      </Box>
    ),
  },
}

export default meta
