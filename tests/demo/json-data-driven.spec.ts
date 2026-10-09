
import { test, expect } from '@playwright/test';
import productData from '../../test-data/products.json';

test.describe('Flipkart - JSON Data Driven Testing', () => {

  for (const product of productData.products) {

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

      console.log(`✅ JSON data verified: ${product}`);
    });

  }

});
