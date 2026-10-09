import { test, expect } from '@playwright/test';

test('Flipkart - Product Search', async ({ page }) => {

  // Open Flipkart
  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Verify Flipkart page
  await expect(page).toHaveTitle(/Flipkart/i);

  // Locate the actual editable search box
  const searchBox = page.locator(
    'input[name="q"]:not([readonly])'
  );

  // Verify search box is visible
  await expect(searchBox).toBeVisible();

  // Enter product
  await searchBox.fill('laptop');

  // Press Enter
  await searchBox.press('Enter');

  // Wait for search results navigation
  await page.waitForLoadState('domcontentloaded');

  // Verify search results page
  await expect(page).toHaveURL(/search/i);

  // Keep browser open for 5 seconds
  await page.waitForTimeout(5000);
});