import { Autocomplete } from '@components'
import { Box, Stack, Typography, autocompleteClasses } from '@mui/material'
import { AirportTypes } from '../../../data/airports'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined'

const Location = ({ name, code }: { name: string; code: string }) => (
  <Stack direction={'row'} gap={1}>
    <AirplaneTicketOutlinedIcon fontSize="small" />
    <Typography>
      {name} {`(${code})`}
    </Typography>
  </Stack>
)
const LocationSelect = ({
  airports,
  placeholder,
  label,
  alignment,
  hideCursor = true,
}: {
  airports: AirportTypes
  placeholder: string
  label: string
} & Pick<
  React.ComponentProps<typeof Autocomplete>,
  'alignment' | 'hideCursor'
>) => {
  return (
    <Autocomplete
      alignment={alignment}
      variant="ghost"
      label={label}
      options={airports}
      placeholder={placeholder}
      hideCursor={hideCursor}
      renderOption={(props, data) => {
        let idx = -1
        if (
          'data-option-index' in props &&
          typeof props['data-option-index'] === 'number'
        ) {
          idx = props['data-option-index']
        }
        return (
          <Box
            sx={{
              borderRadius: '8px',
              margin: '5px',
              [`&.${autocompleteClasses.option}`]: {
                padding: '8px',
              },
              display: 'flex',
            }}
            component="li"
            color={'grey'}
            {...props}
          >
            <Box>
              {idx !== -1 && idx < 10 ? (
                <>
                  <Location name={data.city.name} code={data.city.code} />
                  <Stack sx={{ ml: 3 }} direction={'row'}>
                    <FlightTakeoffOutlinedIcon fontSize="small" />
                    <Typography>{data.name.short}</Typography>
                  </Stack>
                </>
              ) : (
                <Location name={data.city.name} code={data.city.code} />
              )}
            </Box>
          </Box>
        )
      }}
    />
  )
}

export default LocationSelect
