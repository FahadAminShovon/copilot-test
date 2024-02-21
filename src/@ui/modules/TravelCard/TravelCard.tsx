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
  Chip,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, CheckboxToggle, ToggleButtonGroup } from '@components'
import { airports } from '../../../data/airports'
import LocationSelect from './LocationSelect'
import DatePicker from '../../components/DatePicker/DatePicker'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { usePopover } from '../../../hooks/usePopover'
import PassangerCounter from './PassangerCounter'
import { formatPassengerCounts } from '../../../utils/helper'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { seatTypes } from '../../../data/seatType'
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'

type ToggleType = 'round-trip' | 'one-way'

const TravelCard = () => {
  const [selectedValue, setSelectedValue] = useState<ToggleType>('one-way')
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))
  const [passengersDescription, setPassengersDescription] = useState('1 adult')
  const [seatType, setSeatType] =
    useState<(typeof seatTypes)[number]['value']>('all classes')
  const selectedClass = seatTypes.find(({ value }) => value === seatType)?.label

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

  const {
    anchorEl: passengerAnchorEl,
    isPopupOpen: isPassengerPopoverOpen,
    handleOpen: openPassengerPopover,
    handleClose: closePassengerPopover,
  } = usePopover()

  const {
    anchorEl: classAnchorEl,
    isPopupOpen: isClassPopoverOpen,
    handleOpen: openClassPopover,
    handleClose: closeClassPopover,
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
            <MuiButton
              endIcon={<ExpandMoreOutlinedIcon color="primary" />}
              startIcon={<AccountCircleOutlinedIcon />}
              onClick={openPassengerPopover}
              disableRipple
              sx={{ color: 'black' }}
            >
              {passengersDescription}
            </MuiButton>
          </Box>
          <MuiButton
            endIcon={<ExpandMoreOutlinedIcon color="primary" />}
            startIcon={<ChairAltOutlinedIcon />}
            onClick={openClassPopover}
            disableRipple
            sx={{ color: 'black' }}
          >
            {selectedClass}
          </MuiButton>
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
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Chip
              label="New"
              variant="filled"
              color="success"
              sx={{ borderRadius: 1, opacity: 0.6, px: 1.5, py: 0.5 }}
            />
            <FormControlLabel
              label="AI Search"
              control={<Switch />}
              css={css`
                .MuiFormControlLabel-label {
                  color: ${colors.grey[600]};
                }
              `}
            />
          </Stack>
          <Box>
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
      <Popover
        open={isPassengerPopoverOpen}
        anchorEl={passengerAnchorEl}
        onClose={closePassengerPopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Paper sx={{ p: 2 }}>
          <PassangerCounter
            onChange={({ adult, child, infantLap, infantSeat }) => {
              const desc = formatPassengerCounts({
                adult,
                infantLap,
                infantSeat,
                child,
              })
              setPassengersDescription(desc)
            }}
          />
        </Paper>
      </Popover>

      <Popover
        open={isClassPopoverOpen}
        anchorEl={classAnchorEl}
        onClose={closeClassPopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Paper sx={{ p: 2, minWidth: 260 }}>
          <Stack gap={2}>
            <CheckboxToggle
              selectedValue={seatType}
              options={seatTypes}
              setSelectedValue={setSeatType}
              row={false}
              labelPlacement="start"
            />
            <Button variant="outlined" onClick={closeClassPopover}>
              Confirm
            </Button>
          </Stack>
        </Paper>
      </Popover>
    </>
  )
}

export default TravelCard
