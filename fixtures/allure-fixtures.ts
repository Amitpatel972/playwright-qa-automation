
import { test as base, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    await use(page);

    if (testInfo.status !== testInfo.expectedStatus) {
      // Attach screenshot when available
      const screenshotPath = testInfo.outputPath('test-failed-1.png');

      try {
        await testInfo.attach('Failure Screenshot', {
          path: screenshotPath,
          contentType: 'image/png',
        });
      } catch {
        // Screenshot may not exist for every failure
      }

      // Attach video when available
      const videoPath = testInfo.outputPath('video.webm');

      try {
        await testInfo.attach('Failure Video', {
          body: await readFile(videoPath),
          contentType: 'video/webm',
        });
      } catch {
        // Video may not exist for every failure
      }
    }
  },
});

export { expect };
