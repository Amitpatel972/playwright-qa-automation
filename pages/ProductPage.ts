import { Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/p\//i, {
      timeout: 20000,
    });

    await expect(this.page).toHaveTitle(/Flipkart/i);

    console.log('✅ Product page opened successfully');
  }
}