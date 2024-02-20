/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useId } from 'react'
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'
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
}: PropType<T>) => {
  const id = useId()
  return (
    <>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <MuiAutocomplete
        sx={sx}
        size="small"
        id={id}
        options={options}
        groupBy={groupBy}
        css={css`
          > div > div {
            div {
              z-index: ${theme.zIndex.appBar};
            }
            input {
              z-index: ${theme.zIndex.appBar};
            }
            input::placeholder {
              opacity: 1;
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
    </>
  )
}

export default AutoComplete
