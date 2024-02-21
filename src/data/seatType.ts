import { CheckboxOptionType } from '../@ui/components/CheckboxToggle/CheckboxToggle'

export const seatTypes = [
  { label: 'All Classes', value: 'all classes' },
  { label: 'Premium Economy', value: 'premium economy' },
  { label: 'Economy Class', value: 'economy class' },
  { label: 'Business Class', value: 'business class' },
  { label: 'First Class', value: 'first class' },
] as const satisfies CheckboxOptionType[]
