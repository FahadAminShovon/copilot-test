import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Box, Divider, Stack } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { Button } from '../Button/Button'

const DatePicker = ({
  value = dayjs(Date.now()),
  setValue,
  onCancel,
}: {
  value: Dayjs | null
  setValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
  onCancel: () => void
}) => {
  return (
    <Box sx={{ width: '100%', pb: 1 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={dayjs(Date.now())}
          value={value}
          onChange={(newVal) => {
            setValue(newVal)
          }}
        />
      </LocalizationProvider>
      <Divider />
      <Stack direction={'row'} justifyContent="space-between" gap={2} m={2}>
        <Button variant="outlined" fullWidth onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" fullWidth onClick={onCancel}>
          Apply
        </Button>
      </Stack>
    </Box>
  )
}

export default DatePicker
