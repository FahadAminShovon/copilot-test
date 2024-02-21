import { Stack, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'
import LocationSelect from './LocationSelect'

type ToggleType = 'round-trip' | 'one-way'

const TravelCard = () => {
  const [selectedValue, setSelectedValue] = useState<ToggleType>('round-trip')
  return (
    <Stack gap={3}>
      <Stack alignItems={'center'} direction={'row'} gap={2}>
        <ToggleButtonGroup
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          buttons={[
            { label: 'Round Trip', value: 'round-trip' },
            { label: 'One Way', value: 'one-way' },
          ]}
        />
        <Box sx={{ ml: 'auto' }}>
          <Typography>1 Adult</Typography>
        </Box>
        <Box>
          <Typography>All Classes</Typography>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{
              flexGrow: 1,
              borderRight: `1px solid ${theme.palette.divider}`,
              paddingRight: 2.5,
            }}
            alignItems="center"
          >
            <LocationSelect
              airports={airports}
              placeholder={'Select City'}
              label="From"
            />
            <Typography>Icon</Typography>
            <LocationSelect
              airports={airports}
              placeholder={'Select City'}
              label="To"
              alignment="right"
            />
          </Stack>
        </Grid>
        <Grid xs={6}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ flexGrow: 1, paddingLeft: 2.5 }}
          >
            <Box>
              <Typography>Depart</Typography>
            </Box>
            {selectedValue === 'round-trip' && (
              <Box>
                <Typography>Return</Typography>
              </Box>
            )}
            {selectedValue !== 'round-trip' && <Box />}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default TravelCard
