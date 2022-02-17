module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    '@storybook/addon-knobs/dist/register',
    'storybook-addon-playwright/preset',
    'storybook-addon-playwright/register',
  ]
}