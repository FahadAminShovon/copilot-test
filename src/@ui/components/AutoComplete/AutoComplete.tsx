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
  labelKey: keyof T
  valueKey: keyof T
  label?: string
  multiple?: TMultiple
} & Pick<
  AutocompleteProps<T, TMultiple, false, false, 'div'>,
  'renderOption' | 'sx'
>

const AutoComplete = <T extends OptionsType>({
  options,
  labelKey,
  label,
  renderOption,
  sx,
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
        css={css`
          > div > div {
            div {
              z-index: ${theme.zIndex.appBar};
            }
            input {
              z-index: ${theme.zIndex.appBar};
            }
          }
        `}
        renderInput={(params) => (
          <TextField
            {...params}
            css={css`
              color: red;
              fieldset {
                border-radius: 9999px;
                background-color: ${theme.palette.common.white};
              }
            `}
            placeholder="asdfasf"
          />
        )}
        getOptionLabel={(option) => option[labelKey]}
        renderOption={renderOption}
      />
    </>
  )
}

export default AutoComplete
