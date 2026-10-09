import { test, expect } from '../../fixtures/base';

test.describe('Playwright - Custom Fixture', () => {

  test('Use Flipkart Home Page fixture', async ({ homePage }) => {

    await homePage.open();

    await homePage.verifySearchBox();

    await expect(homePage.page).toHaveTitle(/Flipkart/i);

    console.log('✅ Custom fixture working successfully');
  });

});