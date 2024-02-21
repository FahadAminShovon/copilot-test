/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useId } from 'react'
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import { Box, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import { theme } from '../../../theme'

type OptionsType = Record<string, any>

type PropType<T extends OptionsType, TMultiple extends boolean = false> = {
  options: T[]
  labelKey?: keyof T
  label?: string
  multiple?: TMultiple
  placeholder?: string
  variant?: 'outlined' | 'ghost'
  alignment?: 'left' | 'right'
  hideCursor?: boolean
} & Pick<
  AutocompleteProps<T, TMultiple, false, false, 'div'>,
  'renderOption' | 'sx' | 'groupBy'
>

const AutoComplete = <T extends OptionsType>({
  options,
  labelKey,
  label,
  renderOption,
  sx,
  groupBy,
  placeholder,
  variant = 'outlined',
  alignment = 'left',
  hideCursor,
}: PropType<T>) => {
  const id = useId()
  return (
    <Box sx={{ width: '100%' }}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <MuiAutocomplete
        sx={sx}
        size="small"
        id={id}
        options={options}
        groupBy={groupBy}
        css={css`
          > div {
            div {
              div {
                z-index: ${theme.zIndex.appBar};
                button {
                  display: ${hideCursor ? 'none' : 'block'};
                }
              }
              input {
                z-index: ${theme.zIndex.appBar};
                margin-left: ${variant === 'ghost' ? -12 : 0}px;
                text-align: ${alignment};
                margin-right: ${alignment === 'left' ? 0 : -40}px;
              }
              input::placeholder {
                opacity: 1;
              }
            }
          }
        `}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              css={css`
                fieldset {
                  border-radius: 9999px;
                  background-color: ${theme.palette.common.white};
                  border: ${variant === 'ghost' ? 'none' : 1};
                }
              `}
              placeholder={placeholder}
            />
          )
        }}
        getOptionLabel={labelKey ? (option) => option[labelKey] : undefined}
        renderOption={renderOption}
      />
    </Box>
  )
}

export default AutoComplete
