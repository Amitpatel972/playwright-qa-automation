import { test, expect } from '@playwright/test';
import { FlipkartHomePage } from '../../pages/FlipkartHomePage';
import { SearchResultsPage } from '../../pages/SearchResultsPage';

test.describe('Flipkart - Negative Search', () => {

  test('Search for unavailable product', async ({ page }) => {

    const homePage = new FlipkartHomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.open();

    await homePage.verifySearchBox();

    const invalidProduct = 'xyzproduct987654321';

    await homePage.searchProduct(invalidProduct);

    await expect(page).toHaveURL(/search/i);

    await expect(
      page.locator('input[name="q"]:not([readonly]):visible').first()
    ).toHaveValue(invalidProduct);

    console.log(`✅ Search executed for: ${invalidProduct}`);
    console.log('✅ Search results page loaded');
    console.log('✅ Search query verified');

  });

});