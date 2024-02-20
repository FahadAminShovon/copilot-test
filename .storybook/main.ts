import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  stories: [
    '../src/**/*.mdx',
    {
      directory: '../src/@ui/components/',
      files: '**/*.stories.@(ts|tsx)',
      titlePrefix: 'Components',
    },
    {
      directory: '../src/@ui/modules/',
      files: '**/*.stories.@(ts|tsx)',
      titlePrefix: 'Modules',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    // autodocs: 'tag',
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};
export default config;
