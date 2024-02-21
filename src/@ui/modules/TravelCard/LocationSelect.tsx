import { Autocomplete } from '@components'
import { Box, Typography, autocompleteClasses } from '@mui/material'
import { AirportTypes } from '../../../data/airports'

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
                <Box>
                  <Typography>
                    {data.city.name} {`(${data.city.code})`}
                  </Typography>
                  <Box sx={{ ml: 3 }}>
                    <Typography>{data.name.short}</Typography>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Typography>
                    {data.city.name} {`(${data.city.code})`}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        )
      }}
    />
  )
}

export default LocationSelect
