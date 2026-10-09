import { test, expect } from '@playwright/test';

test('SauceDemo - Login Test', async ({ page }) => {

  // Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Verify login page
  await expect(
    page.getByText('Swag Labs')
  ).toBeVisible();

  // Enter username
  await page.getByPlaceholder('Username').fill(
    'standard_user'
  );

  // Enter password
  await page.getByPlaceholder('Password').fill(
    'secret_sauce'
  );

  // Click Login
  await page.getByRole('button', {
    name: 'Login'
  }).click();

  // Verify Products page
  await expect(
    page.getByText('Products')
  ).toBeVisible();

  // Verify URL
  await expect(page).toHaveURL(
    /inventory\.html/
  );

  // Keep browser open for learning
  await page.waitForTimeout(5000);
});