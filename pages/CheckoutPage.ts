import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCheckout(): Promise<void> {
    await this.page.goto('https://www.flipkart.com/viewcart', {
      waitUntil: 'commit',
      timeout: 60000,
    });

    await this.page.waitForTimeout(3000);
  }

  async inspectCheckoutOptions(): Promise<void> {
    console.log('\n========== CHECKOUT OPTIONS ==========');

    const buttons = this.page.locator('button:visible');
    const buttonCount = await buttons.count();

    console.log(`Visible buttons: ${buttonCount}`);

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = (await button.innerText().catch(() => '')).trim();

      if (/place|order|checkout|continue|proceed/i.test(text)) {
        console.log(`BUTTON ${i}: "${text}"`);
      }
    }

    console.log('\n========== CHECKOUT LINKS ==========');

    const links = this.page.locator('a:visible');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = (await link.innerText().catch(() => '')).trim();
      const href = await link.getAttribute('href');

      if (/place|order|checkout|continue|proceed/i.test(text)) {
        console.log(`LINK ${i}: TEXT="${text}" HREF="${href}"`);
      }
    }

    console.log('=====================================\n');
  }

  async verifyCheckoutPage(): Promise<void> {
    await expect(this.page).toHaveURL(/viewcart/i);
    await expect(this.page).toHaveTitle(/Flipkart/i);

    console.log('✅ Checkout starting page verified');
  }
}