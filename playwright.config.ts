import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests/e2e',
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: 'Chromium 1024x503',
      use: {
        browserName: 'chromium',
        viewport: {
          height: 503,
          width: 1024,
        },
      },
    },
    {
      name: 'Webkit 1024x503',
      use: {
        browserName: 'webkit',
        viewport: {
          height: 503,
          width: 1024,
        },
      },
    },
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },
    {
      name: 'iPhone 11',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 11'],
      },
    },
  ],
};
export default config;
