/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {
  Stack,
  Box,
  Typography,
  Paper,
  Popover,
  Button as MuiButton,
  InputLabel,
  Switch,
  FormControlLabel,
  colors,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'
import LocationSelect from './LocationSelect'
import DatePicker from '../../components/DatePicker/DatePicker'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { usePopover } from '../../../hooks/usePopover'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import { AISearchBtn } from './AISearchBtn'
import SelectedClass from './SelectedClass'
import PassangerSelect from './PassangerSelect'

type ToggleType = 'round-trip' | 'one-way'

const TravelCard = () => {
  const [selectedValue, setSelectedValue] = useState<ToggleType>('one-way')
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))
  const [isAiSearchEnabled, setIsAiSearchEnabled] = useState(false)
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
  } = usePopover()

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
    <>
      {!isAiSearchEnabled && (
        <Stack gap={5}>
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
              <PassangerSelect />
            </Box>
            <SelectedClass />
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
                <RepeatOutlinedIcon />
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
                  <InputLabel>Depart</InputLabel>
                  <MuiButton
                    sx={{ padding: 0, color: 'black', mt: 1 }}
                    onClick={handleOpen}
                    disableRipple
                  >
                    {value ? dayjs(value).format('ddd MMMM D YYYY') : ''}
                  </MuiButton>
                </Box>

                {selectedValue === 'round-trip' && (
                  <Box>
                    <Typography>Return</Typography>
                    <MuiButton
                      sx={{ padding: 0, color: 'black' }}
                      onClick={handleOpen}
                      disableRipple
                    >
                      {value
                        ? dayjs(value).add(30, 'day').format('ddd MMMM D YYYY')
                        : ''}
                    </MuiButton>
                  </Box>
                )}
                {selectedValue !== 'round-trip' && <Box />}
              </Stack>
            </Grid>
          </Grid>
          <Stack direction={'row'} gap={1} alignItems="center">
            <FormControlLabel
              label="Nonstop"
              control={<Switch />}
              css={css`
                .MuiFormControlLabel-label {
                  color: ${colors.grey[600]};
                }
              `}
            />
            <AISearchBtn
              isAiSearchEnabled={isAiSearchEnabled}
              setIsAiSearchEnabled={setIsAiSearchEnabled}
            />
            <Box sx={{ ml: 'auto' }}>
              <Button
                variant="contained"
                size="large"
                sx={{ ml: 'auto', px: 2 }}
                disabled={selectedValue === 'one-way'}
              >
                Search&nbsp;Flights
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}

      {isAiSearchEnabled && (
        <Stack my={10} alignItems={'center'}>
          <TextField
            placeholder="Where would you like to go?"
            InputProps={{
              endAdornment: <SendOutlinedIcon color="primary" />,
            }}
            sx={{
              minWidth: {
                xs: '100%',
                md: '75%',
                background: colors.blueGrey['50'],
              },
            }}
          />
          <Box sx={{ mt: 3 }}>
            <AISearchBtn
              isAiSearchEnabled={isAiSearchEnabled}
              setIsAiSearchEnabled={setIsAiSearchEnabled}
            />
          </Box>
        </Stack>
      )}

      <Popover
        open={isDatePickerOneTripOpen}
        anchorEl={anchorElOneTrip}
        onClose={handleDatePickerOneTripClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Paper>
          <DatePicker
            value={value}
            setValue={setValue}
            onCancel={handleClose}
          />
        </Paper>
      </Popover>

      <Popover
        open={isDatePickerRoundTripOpen}
        anchorEl={anchorElRoundTrip}
        onClose={handleDatePickerRoundTripClose}
      >
        <Paper sx={{ p: 3 }}>
          <Typography>
            DateRange is only available for Mui-x pro plan
          </Typography>
        </Paper>
      </Popover>
    </>
  )
}

export default TravelCard
