import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export type CheckboxOptionType<T extends string = string> = {
  label: string
  value: T
}
export type CheckboxToggleProps<T extends string = string> = {
  label?: string
  selectedValue: string
  options: CheckboxOptionType<T>[]
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>
  row?: boolean
} & Pick<FormControlLabelProps, 'labelPlacement'>
export default function CheckboxToggle<T extends string = string>({
  label,
  selectedValue,
  options,
  setSelectedValue,
  row,
  labelPlacement = 'end',
}: CheckboxToggleProps<T>) {
  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup
        aria-label="position"
        row={row}
        onChange={(e) => {
          if ('value' in e.target) {
            setSelectedValue(e.target.value as T)
          }
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Checkbox />}
            checked={selectedValue === option.value}
            label={option.label}
            labelPlacement={labelPlacement}
            sx={{ justifyContent: 'space-between' }}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}
