import { Box, Paper } from '@mui/material'
import TravelCard from '../@ui/modules/TravelCard/TravelCard'

const Home = () => {
  return (
    <Box sx={{ mt: '80px' }}>
      <Paper elevation={1} sx={{ boxShadow: 3, padding: 2.5, borderRadius: 4 }}>
        <TravelCard />
      </Paper>
    </Box>
  )
}

export default Home
