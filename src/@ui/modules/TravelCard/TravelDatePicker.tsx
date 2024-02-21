import {
  Box,
  InputLabel,
  Button as MuiButton,
  Paper,
  Popover,
} from '@mui/material'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { usePopover } from '../../../hooks/usePopover'
import DatePicker from '../../components/DatePicker/DatePicker'

type PropType = {
  children: React.ReactNode
  value: Dayjs | null
  setValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

const TravelDatePicker = ({ children, value, setValue }: PropType) => {
  const { anchorEl, isPopupOpen, handleOpen, handleClose } = usePopover()

  return (
    <Box>
      <InputLabel>{children}</InputLabel>
      <MuiButton
        sx={{ padding: 0, color: 'black', mt: 1 }}
        onClick={handleOpen}
        disableRipple
      >
        {value ? dayjs(value).format('ddd MMMM D YYYY') : ''}
      </MuiButton>
      <Popover
        open={isPopupOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
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
    </Box>
  )
}

export default TravelDatePicker
