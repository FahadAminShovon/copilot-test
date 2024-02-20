/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, List, ListItem } from '@mui/material'

const Footer = () => {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: flex-end;
        padding: 0;
      `}
    >
      <List
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 0,
        }}
      >
        <ListItem>
          <Link color="inherit" underline="none">
            a
          </Link>
        </ListItem>
        <ListItem>
          <Link color="inherit" underline="none">
            b
          </Link>
        </ListItem>
      </List>
    </footer>
  )
}

export default Footer
