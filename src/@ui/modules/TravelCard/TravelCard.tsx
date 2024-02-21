import { Stack, Box, Typography, autocompleteClasses } from '@mui/material'
import { useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { Autocomplete, ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'

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
          >
            <Box>
              <Autocomplete
                variant="ghost"
                label="From"
                options={airports}
                sx={{ width: 300 }}
                placeholder="Select City"
                renderOption={(props, data) => {
                  let idx = -1
                  if (
                    'data-option-index' in props &&
                    typeof props['data-option-index'] === 'number'
                  ) {
                    idx = props['data-option-index']
                  }
                  return (
                    <Box
                      sx={{
                        borderRadius: '8px',
                        margin: '5px',
                        [`&.${autocompleteClasses.option}`]: {
                          padding: '8px',
                        },
                        display: 'flex',
                      }}
                      component="li"
                      color={'grey'}
                      {...props}
                    >
                      <Box>
                        {idx !== -1 && idx < 10 ? (
                          <Box>
                            <Typography>
                              {data.city.name} {`(${data.city.code})`}
                            </Typography>
                            <Box sx={{ ml: 3 }}>
                              <Typography>{data.name.short}</Typography>
                            </Box>
                          </Box>
                        ) : (
                          <Box>
                            <Typography>
                              {data.city.name} {`(${data.city.code})`}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  )
                }}
              />
            </Box>
            <Box>
              <Typography>To</Typography>
            </Box>
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
