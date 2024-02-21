import { useState } from 'react'
import { seatTypes } from '../../../data/seatType'
import { usePopover } from '../../../hooks/usePopover'
import { Button as MuiButton, Paper, Popover, Stack } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined'
import { Button, CheckboxToggle } from '@components'

const SelectedClass = () => {
  const [seatType, setSeatType] =
    useState<(typeof seatTypes)[number]['value']>('all classes')
  const selectedClass = seatTypes.find(({ value }) => value === seatType)?.label

  const {
    anchorEl: classAnchorEl,
    isPopupOpen: isClassPopoverOpen,
    handleOpen: openClassPopover,
    handleClose: closeClassPopover,
  } = usePopover()

  return (
    <>
      {' '}
      <MuiButton
        endIcon={<ExpandMoreOutlinedIcon color="primary" />}
        startIcon={<ChairAltOutlinedIcon />}
        onClick={openClassPopover}
        disableRipple
        sx={{ color: 'black' }}
      >
        {selectedClass}
      </MuiButton>
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

export default SelectedClass
