import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = page
      .locator('input[name="q"]:not([readonly]):visible')
      .first();

    this.products = page.locator('a[href*="/p/"]:visible');
  }

  async verifySearchResults(productName: string): Promise<void> {
    await expect(this.page).toHaveURL(/search/i);

    await expect(this.searchInput).toBeVisible({
      timeout: 20000,
    });

    await expect(this.searchInput).toHaveValue(productName);
  }

  async openFirstProduct(): Promise<void> {
    const firstProduct = this.products.first();

    await expect(firstProduct).toBeVisible({
      timeout: 20000,
    });

    const href = await firstProduct.getAttribute('href');

    if (!href) {
      throw new Error('❌ First product URL nahi mila.');
    }

    console.log(`Product URL: ${href}`);

    const productUrl = new URL(
      href,
      'https://www.flipkart.com'
    ).toString();

    console.log(`Opening product: ${productUrl}`);

    // IMPORTANT:
    // Flipkart product page may not reach domcontentloaded quickly.
    await this.page.goto(productUrl, {
      waitUntil: 'commit',
      timeout: 60000,
    });

    // Product page ko render hone ka time
    await this.page.waitForTimeout(5000);
  }
}