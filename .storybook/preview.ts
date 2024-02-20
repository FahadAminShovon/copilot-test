import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import type { Preview } from '@storybook/react';

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        // Provide your custom themes here
        // light: theme,
        // dark: theme,
        theme,
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
