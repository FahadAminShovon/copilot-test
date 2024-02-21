/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {
  Stack,
  Box,
  Typography,
  Paper,
  Popover,
  Button as MuiButton,
  Switch,
  FormControlLabel,
  colors,
  TextField,
  Divider,
  InputLabel,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'
import LocationSelect from './LocationSelect'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { usePopover } from '../../../hooks/usePopover'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import { AISearchBtn } from './AISearchBtn'
import SelectedClass from './SelectedClass'
import PassangerSelect from './PassangerSelect'
import TravelDatePicker from './TravelDatePicker'

type ToggleType = 'round-trip' | 'one-way'

const CustomDivider = () => (
  <Grid xs={12} sx={{ display: { md: 'none' } }}>
    <Divider />
  </Grid>
)

const TravelCard = () => {
  const [selectedValue, setSelectedValue] = useState<ToggleType>('one-way')
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))
  const [isAiSearchEnabled, setIsAiSearchEnabled] = useState(false)
  const {
    anchorEl: anchorElRoundTrip,
    isPopupOpen: isDatePickerRoundTripOpen,
    handleOpen,
    handleClose: handleDatePickerRoundTripClose,
  } = usePopover()

  const handleClose = () => {
    handleDatePickerRoundTripClose()
  }

  useEffect(() => {
    handleClose()
  }, [selectedValue])

  return (
    <>
      {!isAiSearchEnabled && (
        <Stack gap={{ xs: 7, md: 5 }}>
          <Stack alignItems={'center'} direction={'row'} gap={2}>
            <ToggleButtonGroup
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              buttons={[
                { label: 'Round Trip', value: 'round-trip' },
                { label: 'One Way', value: 'one-way' },
              ]}
            />
            <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'block' } }}>
              <PassangerSelect />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <SelectedClass />
            </Box>
          </Stack>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{
                  flexGrow: 1,
                  borderRight: {
                    xs: 'none',
                    md: `1px solid ${theme.palette.divider}`,
                  },
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
            <CustomDivider />
            <Grid xs={12} md={6}>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{ flexGrow: 1, paddingLeft: { xs: 0, md: 2.5 } }}
              >
                <TravelDatePicker value={value} setValue={setValue}>
                  Depart
                </TravelDatePicker>

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
            <CustomDivider />
            <Grid sx={{ display: { md: 'none' } }} xs={12}>
              <InputLabel>Passengers</InputLabel>
              <PassangerSelect />
            </Grid>
            <CustomDivider />
            <Grid sx={{ display: { md: 'none' } }} xs={12}>
              <InputLabel>Cabin Class</InputLabel>
              <SelectedClass />
            </Grid>
            <CustomDivider />
          </Grid>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            gap={5}
            alignItems="center"
          >
            <Stack
              flexWrap="wrap"
              direction="row"
              justifyContent={{ xs: 'space-between', md: 'flex-start' }}
              sx={{ width: { xs: '100%', md: 'auto' } }}
              gap={2}
            >
              <FormControlLabel
                label="Nonstop"
                control={<Switch size="small" />}
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
            </Stack>
            <Box
              sx={{
                ml: 'auto',
                flexGrow: { xs: 1, md: 0 },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ ml: { md: 'auto' }, px: 2, width: '100%' }}
                disabled={selectedValue === 'one-way'}
              >
                Search Flights
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}

      {isAiSearchEnabled && (
        <Stack
          my={{ md: 10 }}
          alignItems={'center'}
          sx={{
            minHeight: { xs: '75vh', md: 'auto' },
            justifyContent: 'center',
          }}
        >
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
