import { test } from '@playwright/test';

test.describe('Flipkart - Add To Cart', () => {

  test.skip(
    'Search laptop and add product to cart',
    async () => {
      // Skipped because the current Flipkart product UI
      // does not expose a stable Add to Cart element.
    }
  );

});