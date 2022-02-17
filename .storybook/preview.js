export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: 'rgba(255, 255, 255, 1)' },
      { name: 'dark', value: 'rgba(29, 29, 27, 1)' },
    ],
  },
}