import { test, expect } from '@playwright/test';

test('Playwright locator practice', async ({ page }) => {

  // Open website
  await page.goto('https://playwright.dev/');

  // 1. Verify page title
  await expect(page).toHaveTitle(/Playwright/);

  // 2. Locate "Get started" link using role
  const getStartedLink = page.getByRole('link', { name: 'Get started' });

  // 3. Verify link is visible
  await expect(getStartedLink).toBeVisible();

  // 4. Click the link
  await getStartedLink.click();

  // 5. Verify Installation heading
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();

});