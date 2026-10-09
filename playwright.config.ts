
import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';

const authStatePath = 'playwright/.auth/user.json';

export default defineConfig({
  testDir: './tests',

  timeout: 90000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Intentional failure demos ko normal test runs se exclude karo.
  testIgnore: [
    '**/failed-test.spec.ts',
    '**/pass-fail-skip.spec.ts',
  ],

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],

  // Separate output folder to avoid the previous Windows folder-lock issue.
  outputDir: process.env.CI
    ? 'test-results'
    : 'C:/QA-playwright-results',

  use: {
    baseURL: 'https://www.flipkart.com',

    // Use saved login state only when the file exists.
    storageState: existsSync(authStatePath)
      ? authStatePath
      : undefined,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
