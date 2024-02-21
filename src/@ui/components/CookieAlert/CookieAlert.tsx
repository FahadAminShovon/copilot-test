import { Button } from '@components'
import { Box, Stack, Typography, colors } from '@mui/material'
import { useState } from 'react'

export type CookiePropType = {
  onAcceptAllCookie: () => void
  onAcceptNecessaryCookie: () => void
}
const CookieAlert = ({
  onAcceptAllCookie,
  onAcceptNecessaryCookie,
}: CookiePropType) => {
  return (
    <Stack
      p={2.5}
      sx={{ background: colors.blueGrey[50] }}
      gap={2}
      direction={{ md: 'row' }}
      alignItems={{ md: 'center' }}
    >
      <Typography
        sx={{ textAlign: { xs: 'center', md: 'start' }, fontSize: 10 }}
      >
        By clicking the search button above you are agreeing to the
        <Box component={'span'} sx={{ color: colors.blue[500], ml: 0.5 }}>
          Privacy Policy, Terms and Conditions, and End User Licensing
          Agreement.
        </Box>
      </Typography>

      <Button
        variant="contained"
        sx={{ ml: { md: 'auto' } }}
        onClick={onAcceptAllCookie}
      >
        Accept All
      </Button>
      <Button variant="contained" onClick={onAcceptNecessaryCookie}>
        Accept Necessary
      </Button>
    </Stack>
  )
}

export default CookieAlert
