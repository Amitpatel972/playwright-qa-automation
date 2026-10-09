
import { test, expect } from '../../fixtures/allure-fixtures';

test('PASS - Addition works correctly', async () => {
  expect(2 + 2).toBe(4);
});

test('FAIL - Screenshot and Video demo', async ({ page }, testInfo) => {
  await page.goto('https://www.flipkart.com');

  await testInfo.attach('Failure Screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });

  expect(1).toBe(2);
});

test.skip('SKIP - Test intentionally skipped', async () => {
  expect(true).toBe(true);
});
