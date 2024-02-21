/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Chip, FormControlLabel, Stack, Switch, colors } from '@mui/material'

type Proptype = {
  isAiSearchEnabled: boolean
  setIsAiSearchEnabled: (value: React.SetStateAction<boolean>) => void
}
export const AISearchBtn = ({
  isAiSearchEnabled,
  setIsAiSearchEnabled,
}: Proptype) => (
  <Stack direction="row" gap={1} alignItems="center">
    <Chip
      label="New"
      variant="filled"
      color="success"
      sx={{ borderRadius: 1, opacity: 0.6, px: 1.5, py: 0.5 }}
    />
    <FormControlLabel
      label="AI Search"
      control={<Switch />}
      css={css`
        .MuiFormControlLabel-label {
          color: ${colors.grey[600]};
        }
      `}
      checked={isAiSearchEnabled}
      onClick={() => {
        setIsAiSearchEnabled((prev) => !prev)
      }}
    />
  </Stack>
)
