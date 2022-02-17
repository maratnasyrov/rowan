import 'core-js';

import { getScreenshots } from 'storybook-addon-playwright';

import { path } from './helpers/playwright-path';

// TODO: Включить потом e2e тесты в скрипте для test

describe('SlotInterface template test screenshots', () => {
  it('should pass image diff', async () => {
    await getScreenshots({
      requestId: 'slotInterface',
      playwrightJsonPath: path('ui/GameScreen/Main', 'SlotInterface'),
      onScreenshotReady: (screenshotBuffer, baselineScreenshotPath) => {
        expect(screenshotBuffer).toMatchImageSnapshot({
          customSnapshotIdentifier: baselineScreenshotPath.screenshotIdentifier,
          customSnapshotsDir: baselineScreenshotPath.screenshotsDir,
        });
      },
    });
  }, 10000);
});
