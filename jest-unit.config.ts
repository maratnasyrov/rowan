export default {
  clearMocks: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  roots: ['./src/'],
};
