/** @jsxImportSource @emotion/react */
import { Box, Container } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'

type PropType = {
  children: React.ReactNode
}
const Layout = ({ children }: PropType) => {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block',
            position: 'absolute',
            backgroundImage: "url('src/assets/copilotBackground.png')",
            inset: 0,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            pointerEvents: 'none',
            height: 400,
            zIndex: -1,
            objectFit: 'cover',
          },
        }}
      />
      <Container maxWidth="xl" sx={{ py: 2, minHeight: `calc(100% - 2.5rem)` }}>
        {children}
      </Container>
      <Container maxWidth="xl">
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout
