import { test } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Flipkart - Checkout', () => {

  test('Inspect checkout options safely', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.openCheckout();
    await checkoutPage.verifyCheckoutPage();
    await checkoutPage.inspectCheckoutOptions();

  });

});