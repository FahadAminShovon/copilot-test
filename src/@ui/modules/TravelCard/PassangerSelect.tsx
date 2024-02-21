import { useState } from 'react'
import PassangerCounter from './PassangerCounter'
import { formatPassengerCounts } from '../../../utils/helper'
import { usePopover } from '../../../hooks/usePopover'
import { Button as MuiButton, Paper, Popover } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const PassangerSelect = () => {
  const [passengersDescription, setPassengersDescription] = useState('1 adult')
  const {
    anchorEl: passengerAnchorEl,
    isPopupOpen: isPassengerPopoverOpen,
    handleOpen: openPassengerPopover,
    handleClose: closePassengerPopover,
  } = usePopover()

  return (
    <>
      <MuiButton
        endIcon={<ExpandMoreOutlinedIcon color="primary" />}
        startIcon={<AccountCircleOutlinedIcon />}
        onClick={openPassengerPopover}
        disableRipple
        sx={{ color: 'black' }}
      >
        {passengersDescription}
      </MuiButton>
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
    </>
  )
}

export default PassangerSelect
