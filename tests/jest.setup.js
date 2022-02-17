import { chromium, firefox, webkit } from 'playwright';
import { toMatchScreenshots } from 'storybook-addon-playwright';
import { setConfig } from 'storybook-addon-playwright/configs';

expect.extend({ toMatchScreenshots });

let browser = {};

beforeAll(async () => {
  browser = {
    chromium: await chromium.launch(),
    firefox: await firefox.launch(),
    webkit: await webkit.launch(),
  };
  setConfig({
    storybookEndpoint: `http://localhost:6006/`,
    getPage: async (browserType, options) => {
      return browser[browserType].newPage(options);
    },
    afterScreenshot: async page => {
      await page.close();
    },
  });
});

afterAll(async () => {
  const promises = Object.keys(browser).map(browserType =>
    browser[browserType].close()
  );
  await Promise.resolve(promises);
});
