import { test, expect } from '@playwright/test';
import { FlipkartHomePage } from '../../pages/FlipkartHomePage';

test.describe('Flipkart - Empty Search Validation', () => {

  test('Search with empty input', async ({ page }) => {

    const homePage = new FlipkartHomePage(page);

    await homePage.open();
    await homePage.verifySearchBox();

    const searchBox = page
      .locator('input[name="q"]:not([readonly]):visible')
      .first();

    await expect(searchBox).toBeVisible();

    await searchBox.fill('');
    await searchBox.press('Enter');

    await page.waitForTimeout(2000);

    console.log(`Current URL: ${page.url()}`);
    console.log('✅ Empty search action completed');

  });

});