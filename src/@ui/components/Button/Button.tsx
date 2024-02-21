import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

// Only include variant, size, and color
type ButtonBaseProps = Pick<
  MuiButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'children'
  | 'fullWidth'
  | 'onClick'
  | 'sx'
  | 'disabled'
>

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ children, sx, ...rest }: ButtonProps) => (
  <MuiButton {...rest} sx={{ borderRadius: 9999, ...sx }}>
    {children}
  </MuiButton>
)
