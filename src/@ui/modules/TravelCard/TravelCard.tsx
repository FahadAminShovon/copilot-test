import { Stack, Box, Typography, Popper, Paper, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'
import LocationSelect from './LocationSelect'
import DatePicker from '../../components/DatePicker/DatePicker'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { usePopover } from '../../../hooks/usePopover'

type ToggleType = 'round-trip' | 'one-way'

const TravelCard = () => {
  const [selectedValue, setSelectedValue] = useState<ToggleType>('one-way')
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))
  const {
    anchorEl: anchorElOneTrip,
    isPopupOpen: isDatePickerOneTripOpen,
    handleOpen: handleDatePickerOneTripOpen,
    handleClose: handleDatePickerOneTripClose,
  } = usePopover()

  const {
    anchorEl: anchorElRoundTrip,
    isPopupOpen: isDatePickerRoundTripOpen,
    handleOpen: handleDatePickerRoundTripOpen,
    handleClose: handleDatePickerRoundTripClose,
  } = usePopover({ autoClose: true })

  const handleOpen: typeof handleDatePickerOneTripOpen = (e) => {
    if (selectedValue === 'one-way') {
      handleDatePickerOneTripOpen(e)
    } else if (selectedValue === 'round-trip') {
      handleDatePickerRoundTripOpen(e)
    }
  }

  const handleClose = () => {
    handleDatePickerOneTripClose()
    handleDatePickerRoundTripClose()
  }

  useEffect(() => {
    handleClose()
  }, [selectedValue])

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
              <Typography>Departed</Typography>
              <Button
                sx={{ padding: 0, color: 'black', mt: 1 }}
                onClick={handleOpen}
                disableRipple
              >
                {value ? dayjs(value).format('ddd MMMM D YYYY') : ''}
              </Button>
            </Box>
            <Popper open={isDatePickerOneTripOpen} anchorEl={anchorElOneTrip}>
              <Paper>
                <DatePicker
                  value={value}
                  setValue={setValue}
                  onCancel={handleClose}
                />
              </Paper>
            </Popper>

            <Popper
              open={isDatePickerRoundTripOpen}
              anchorEl={anchorElRoundTrip}
            >
              <Paper sx={{ p: 3 }}>
                <Typography>
                  DateRange is only available for Mui-x pro plan
                </Typography>
              </Paper>
            </Popper>

            {selectedValue === 'round-trip' && (
              <Box>
                <Typography>Return</Typography>
                <Button
                  sx={{ padding: 0, color: 'black' }}
                  onClick={handleOpen}
                  disableRipple
                >
                  {value
                    ? dayjs(value).add(30, 'day').format('ddd MMMM D YYYY')
                    : ''}
                </Button>
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
