import { createTheme } from '@mui/material'

const primaryColor = '#151E34' // Your hex color

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: '#4b5064', // lighter shade
      dark: '#000a1e', // darker shade
      contrastText: '#ffffff', // contrast text color
    },
  },
})
