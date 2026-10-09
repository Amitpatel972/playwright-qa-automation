import { test, expect } from '@playwright/test';

test('Playwright locator practice', async ({ page }) => {

  // Create a local test page
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>QA Practice Application</title>
      </head>

      <body>

        <h1>QA Practice Application</h1>

        <form>

          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
          />

          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
          />

          <button type="button">Login</button>

        </form>

        <a href="#">Get Started</a>

        <h2>Dashboard</h2>

      </body>
    </html>
  `);

  // Verify page title
  await expect(page).toHaveTitle('QA Practice Application');

  // Locate username using label
  const username = page.getByLabel('Username');

  // Verify username field is visible
  await expect(username).toBeVisible();

  // Enter username
  await username.fill('testuser');

  // Locate password using label
  const password = page.getByLabel('Password');

  // Enter password
  await password.fill('Test@123');

  // Verify entered username
  await expect(username).toHaveValue('testuser');

  // Verify entered password
  await expect(password).toHaveValue('Test@123');

  // Locate Login button
  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  // Verify Login button
  await expect(loginButton).toBeVisible();

  // Locate Get Started link
  const getStartedLink = page.getByRole('link', {
    name: 'Get Started'
  });

  // Verify Get Started link
  await expect(getStartedLink).toBeVisible();

  // Verify Dashboard heading
  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

});