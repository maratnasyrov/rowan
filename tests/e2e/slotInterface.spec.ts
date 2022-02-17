import { expect, test } from '@playwright/test';

// TODO: Включить потом e2e тесты в скрипте для test

// eslint-disable-next-line jest/no-done-callback
test('should click on spin button', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  await page.click('[data-test-id=spin]');

  // TODO: в дальнейшем поправить этот тест в зависимости от логики кнопки
  expect(await page.locator('.game-time').textContent()).toBe('00:00');
});
