import { test } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';

test.describe('Flipkart - Cart', () => {

  test('Verify Flipkart empty cart', async ({ page }) => {

    const cartPage = new CartPage(page);

    await cartPage.openCart();
    await cartPage.verifyCartPage();
    await cartPage.verifyCartContent();

    console.log('✅ Cart verification completed');
  });

});