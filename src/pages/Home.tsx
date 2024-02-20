import { Box, Paper } from '@mui/material'
import TravelCard from '../@ui/modules/TravelCard/TravelCard'
import { useState } from 'react'

const Home = () => {
  const [isAiSearch, setIsAiSeach] = useState(false)
  return (
    <Box sx={{ mt: '80px' }}>
      <Paper elevation={1} sx={{ boxShadow: 3, padding: 2.5, borderRadius: 4 }}>
        {!isAiSearch && <TravelCard />}
      </Paper>
    </Box>
  )
}

export default Home
