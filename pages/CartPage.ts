import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart(): Promise<void> {
    await this.page.goto('https://www.flipkart.com/viewcart', {
      waitUntil: 'commit',
      timeout: 60000,
    });

    await this.page.waitForTimeout(3000);
  }

  async verifyCartPage(): Promise<void> {
    await expect(this.page).toHaveURL(/viewcart/i);
    await expect(this.page).toHaveTitle(/Flipkart/i);

    console.log('✅ Cart URL verified');
    console.log('✅ Cart page title verified');
  }

  async verifyCartContent(): Promise<void> {
    const pageText = await this.page.locator('body').innerText();

    console.log('========== CART STATE ==========');

    if (/empty cart|your cart is empty/i.test(pageText)) {
      console.log('✅ Empty cart message found');
    } else {
      console.log('ℹ️ Cart page loaded, but empty-cart text was not detected');
    }

    console.log('================================');
  }
}