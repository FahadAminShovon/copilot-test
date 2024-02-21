/** @jsxImportSource @emotion/react */
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import { Box, IconButton, Stack, Typography } from '@mui/material'
export type CounterProps = {
  onIncrement: () => void
  onDecrement: () => void
  value: number
  label?: string
  caption?: string
}

const Counter = ({
  label,
  caption,
  onDecrement,
  onIncrement,
  value,
}: CounterProps) => {
  return (
    <Stack
      direction={'row'}
      alignItems="center"
      gap={1}
      sx={{ width: '100%', justifyContent: 'space-between' }}
    >
      <Stack>
        {label && <Typography>{label}</Typography>}
        {caption && (
          <Typography color="gray" fontSize={12}>
            {caption}
          </Typography>
        )}
      </Stack>
      <Stack direction={'row'} alignItems="center">
        <IconButton
          color="primary"
          onClick={onDecrement}
          sx={{ p: 0, pr: 0.5 }}
        >
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
        <Box
          borderBottom={1}
          minWidth={100}
          sx={{
            padding: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            mb: 0.5,
          }}
        >
          <Typography>{value}</Typography>
        </Box>
        <IconButton
          color="primary"
          onClick={onIncrement}
          sx={{ p: 0, pl: 0.5 }}
        >
          <ControlPointOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default Counter
