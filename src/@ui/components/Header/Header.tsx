/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, List, ListItem } from '@mui/material'
import SvgCopilotTravel from '../../../assets/icons/SvgCopilotTravel'

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <nav>
        <List>
          <ListItem>
            <Box sx={{ ml: -2 }}>
              <SvgCopilotTravel />
            </Box>
          </ListItem>
        </List>
      </nav>
    </header>
  )
}

export default Header
