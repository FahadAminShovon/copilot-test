/** @jsxImportSource @emotion/react */
import { Box, Container, css } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Header } from '@components'

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
      <Container maxWidth="xl" sx={{ pt: 2, pb: 0, height: '100%' }}>
        <Header />
        <main
          css={css`
            width: 100%;
            /* min-height: calc(100% - 8rem); */
            padding-block: 1rem;
          `}
        >
          {children}
        </main>
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout
