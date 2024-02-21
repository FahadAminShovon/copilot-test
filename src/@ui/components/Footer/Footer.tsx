/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link, List, ListItem, Typography } from '@mui/material'
import SvgTm from '../../../assets/icons/SvgTm'
import ArticleIcon from '@mui/icons-material/Article'

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
        <ListItem sx={{ p: 0 }}>
          <Link
            color="inherit"
            underline="none"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography fontSize={12} whiteSpace="nowrap">
              Powered By
            </Typography>
            <SvgTm />
          </Link>
        </ListItem>
        <ListItem sx={{ pl: 0, ml: 2 }}>
          <Link
            color="inherit"
            underline="none"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography fontSize={12}>Legal</Typography>
            <ArticleIcon />
          </Link>
        </ListItem>
      </List>
    </footer>
  )
}

export default Footer
