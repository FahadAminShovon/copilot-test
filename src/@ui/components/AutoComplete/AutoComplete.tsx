/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useId } from 'react'
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import { Box, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'

export type OptionsType = Record<string, any>

export type AutoCompletePropType<
  T extends OptionsType,
  TMultiple extends boolean = false,
> = {
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
  'renderOption' | 'sx' | 'groupBy' | 'defaultValue'
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
  defaultValue,
}: AutoCompletePropType<T>) => {
  const id = useId()
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {label && (
        <InputLabel htmlFor={id} sx={{ textAlign: alignment }}>
          {label}
        </InputLabel>
      )}
      <MuiAutocomplete
        defaultValue={defaultValue}
        sx={sx}
        size="small"
        id={id}
        options={options}
        groupBy={groupBy}
        css={css`
          > div {
            div {
              div {
                button {
                  display: ${hideCursor ? 'none' : 'inline-flex'};
                }
              }
              input {
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
