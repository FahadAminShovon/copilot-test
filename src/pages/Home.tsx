import { Box, Paper } from '@mui/material'
import TravelCard from '../@ui/modules/TravelCard/TravelCard'

const Home = () => {
  return (
    <Box sx={{ mt: { xs: 0, md: '80px' } }}>
      <Paper
        elevation={1}
        sx={{
          boxShadow: { xs: 0, md: 3 },
          // padding: { xs: 0, md: 2.5 },
          borderRadius: { xs: 0, md: 4 },
          padding: 2.5,
          pb: { xs: 0, md: 2.5 },
        }}
      >
        <TravelCard />
      </Paper>
    </Box>
  )
}

export default Home
