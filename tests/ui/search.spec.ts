import { test } from '@playwright/test';
import { FlipkartHomePage } from '../../pages/FlipkartHomePage';
import { SearchResultsPage } from '../../pages/SearchResultsPage';

test.describe('Flipkart - Product Search', () => {

  test('Search for laptop', async ({ page }) => {

    const homePage = new FlipkartHomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.open();

    await homePage.verifySearchBox();

    await homePage.searchProduct('laptop');

    await searchResultsPage.verifySearchResults('laptop');

  });

});