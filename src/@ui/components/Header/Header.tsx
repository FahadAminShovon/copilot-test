/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Box,
  List,
  ListItem,
  Typography,
  autocompleteClasses,
} from '@mui/material'
import SvgCopilotTravel from '../../../assets/icons/SvgCopilotTravel'
import { countries } from '../../../data/countries'
import { Autocomplete } from '@components'

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
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
      <Autocomplete
        options={countries}
        labelKey="name"
        valueKey="code"
        sx={{ width: 300 }}
        renderOption={(props, data) => (
          <Box
            sx={{
              borderRadius: '8px',
              margin: '5px',
              [`&.${autocompleteClasses.option}`]: {
                padding: '8px',
              },
              display: 'flex',
            }}
            component="li"
            color={'grey'}
            {...props}
          >
            <Typography>{data.name}</Typography>
            <Typography sx={{ marginLeft: 'auto', fontWeight: 'bold' }}>
              {data.code}
            </Typography>
          </Box>
        )}
      />
    </header>
  )
}

export default Header
