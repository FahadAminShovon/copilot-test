import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

// Only include variant, size, and color
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'children'
>

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest} sx={{ borderRadius: 9999 }}>
    {children}
  </MuiButton>
)
