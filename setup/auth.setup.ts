import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('Login to Flipkart', async ({ page }) => {

  // Open Flipkart
  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Give browser time to load
  await page.waitForTimeout(3000);

  console.log('');
  console.log('======================================');
  console.log('LOGIN REQUIRED');
  console.log('Flipkart browser mein manually login karo.');
  console.log('OTP/CAPTCHA ho to manually complete karo.');
  console.log('Login complete hone ke baad Playwright Inspector mein RESUME karo.');
  console.log('======================================');
  console.log('');

  // Browser ko pause karega.
  // Yahan manually login karna hai.
  await page.pause();

  // Login ke baad Flipkart page check
  await expect(page).toHaveTitle(/Flipkart/i);

  // Login session save
  await page.context().storageState({
    path: authFile,
  });

  console.log('✅ Login session saved successfully.');
});