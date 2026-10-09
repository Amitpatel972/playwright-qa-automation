
import { test, expect } from '@playwright/test';

const searchTerms = [
  'laptop',
  'mobile',
  'headphones',
];

test.describe('Flipkart - Data Driven Search', () => {

  for (const product of searchTerms) {

    test(`Search for ${product}`, async ({ page }) => {

      await page.goto('https://www.flipkart.com/', {
        waitUntil: 'commit',
        timeout: 60000,
      });

      const searchBox = page
        .locator('input[name="q"]:not([readonly]):visible')
        .first();

      await expect(searchBox).toBeVisible({
        timeout: 30000,
      });

      await searchBox.fill(product);
      await searchBox.press('Enter');

      await expect(page).toHaveURL(/search/i, {
        timeout: 30000,
      });

      await expect(searchBox).toHaveValue(product);

      console.log(`✅ Search verified: ${product}`);
    });

  }

});
