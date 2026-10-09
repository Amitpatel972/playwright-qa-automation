import { test } from '@playwright/test';
import { FlipkartHomePage } from '../../pages/FlipkartHomePage';

test.describe('Flipkart - Product', () => {

  test('Open product search results', async ({ page }) => {

    const homePage = new FlipkartHomePage(page);

    await homePage.open();

    await homePage.searchProduct('laptop');

    await page.waitForLoadState('domcontentloaded');

  });

});