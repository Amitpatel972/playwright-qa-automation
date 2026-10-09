import { test as base, expect } from '@playwright/test';
import { FlipkartHomePage } from '../pages/FlipkartHomePage';

type Fixtures = {
  homePage: FlipkartHomePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new FlipkartHomePage(page);
    await use(homePage);
  },
});

export { expect };