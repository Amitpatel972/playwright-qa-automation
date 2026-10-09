
import { test, expect } from '@playwright/test';

test.describe('Playwright - All Hooks', () => {

  test.beforeAll(async () => {
    console.log('🟣 beforeAll: Test suite started');
  });

  test.beforeEach(async ({ page }) => {
    console.log('🔵 beforeEach: Opening Flipkart');

    await page.goto('https://www.flipkart.com/', {
      waitUntil: 'commit',
      timeout: 60000,
    });
  });

  test('Verify Flipkart title', async ({ page }) => {
    await expect(page).toHaveTitle(/Flipkart/i);
    console.log('✅ Title verified');
  });

  test('Verify Flipkart URL', async ({ page }) => {
    await expect(page).toHaveURL(/flipkart\.com/i);
    console.log('✅ URL verified');
  });

  test.afterEach(async () => {
    console.log('🟢 afterEach: Test completed');
  });

  test.afterAll(async () => {
    console.log('🔴 afterAll: Test suite completed');
  });

});
