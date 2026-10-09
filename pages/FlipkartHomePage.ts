import { Page, Locator, expect } from '@playwright/test';

export class FlipkartHomePage {
  readonly page: Page;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = page
      .locator('input[name="q"]:not([readonly]):visible')
      .first();
  }

  async open(): Promise<void> {
    await this.page.goto('https://www.flipkart.com/', {
      waitUntil: 'commit',
      timeout: 60000,
    });

    // Page ko load hone ka time
    await this.page.waitForTimeout(3000);

    await expect(this.page).toHaveTitle(/Flipkart/i, {
      timeout: 30000,
    });
  }

  async verifySearchBox(): Promise<void> {
    await expect(this.searchBox).toBeVisible({
      timeout: 30000,
    });
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchBox.fill(productName);

    await this.searchBox.press('Enter');

    // Search results ke liye URL ka wait
    await expect(this.page).toHaveURL(/search/i, {
      timeout: 30000,
    });
  }
}