module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
