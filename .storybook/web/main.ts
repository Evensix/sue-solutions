import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  babel: async (options) => {
    // Modify Babel options here
    return {
      ...options,
      plugins: [
        ["@babel/plugin-transform-class-properties", { loose: true }],
        ["@babel/plugin-transform-private-methods", { loose: true }],
        ["@babel/plugin-transform-private-property-in-object", { loose: true }],
        ...(options.plugins || []),
      ],
    };
  },
};

export default config;
