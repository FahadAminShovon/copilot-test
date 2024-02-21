import React from 'react'
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  Box,
  Typography,
  colors,
} from '@mui/material'

const Dot = ({ isActive }: { isActive: boolean }) => (
  <Box
    sx={{
      height: 4,
      width: 4,
      borderRadius: '50%',
      background: isActive ? colors.blue[400] : colors.grey[500],
    }}
  />
)

export type CustomToggleButtonProp<T extends string> = {
  toggleType: T
  selectedValue: T
  children: React.ReactNode
}

const CustomToggleButton = <T extends string>({
  toggleType,
  selectedValue,
  children,
}: CustomToggleButtonProp<T>) => (
  <ToggleButton value={toggleType}>
    <Stack direction={'row'} gap={1} alignItems={'center'}>
      <Dot isActive={selectedValue === toggleType} />
      <Typography color="primary" sx={{ textTransform: 'none' }}>
        {children}
      </Typography>
    </Stack>
  </ToggleButton>
)

const ToggleButtonGroup = <T extends string>({
  selectedValue,
  buttons,
  setSelectedValue,
}: {
  selectedValue: T
  buttons: { label: string; value: T }[]
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>
}) => {
  return (
    <MuiToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={(_, val) => {
        setSelectedValue(val)
      }}
    >
      {buttons.map((button) => (
        <CustomToggleButton
          key={button.value}
          toggleType={button.value}
          selectedValue={selectedValue}
        >
          {button.label}
        </CustomToggleButton>
      ))}
    </MuiToggleButtonGroup>
  )
}

export default ToggleButtonGroup
