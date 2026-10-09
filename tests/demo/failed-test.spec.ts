import { test, expect } from '@playwright/test';

test.describe('Playwright - Failed Test Demo', () => {

  test('Intentional failure for screenshot and video', async ({ page }) => {

    await page.goto('https://www.flipkart.com/', {
      waitUntil: 'commit',
      timeout: 60000,
    });

    await page.waitForTimeout(5000);

    console.log('✅ Flipkart page opened');

    // Intentionally failing assertion
    await expect(page).toHaveTitle('THIS TITLE DOES NOT EXIST');

  });

});