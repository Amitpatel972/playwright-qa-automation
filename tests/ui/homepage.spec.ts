import { test, expect } from '@playwright/test';
import { FlipkartHomePage } from '../../pages/FlipkartHomePage';

test.describe('Flipkart - Homepage', () => {

  test('Verify Flipkart homepage', async ({ page }) => {

    const homePage = new FlipkartHomePage(page);

    await homePage.open();

    await expect(page).toHaveTitle(/Flipkart/i);

    await homePage.verifySearchBox();
  });

});