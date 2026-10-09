import { test, expect } from '@playwright/test';

test('Different Playwright locators', async ({ page }) => {

  // Create test page
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Locator Practice</title>
      </head>

      <body>

        <h1>Registration Form</h1>

        <label for="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
        />

        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
        />

        <button type="button">Register</button>

        <p>Registration successful</p>

        <a href="#">Login</a>

      </body>
    </html>
  `);

  // 1. Verify page title
  await expect(page).toHaveTitle('Locator Practice');

  // 2. getByRole() - Button
  const registerButton = page.getByRole('button', {
    name: 'Register'
  });

  await expect(registerButton).toBeVisible();

  // 3. getByLabel() - Full Name
  const nameInput = page.getByLabel('Full Name');

  await expect(nameInput).toBeVisible();

  await nameInput.fill('Amit Patel');

  // 4. getByPlaceholder() - Email
  const emailInput = page.getByPlaceholder(
    'Enter your email'
  );

  await expect(emailInput).toBeVisible();

  await emailInput.fill('amit@example.com');

  // 5. Verify entered values
  await expect(nameInput).toHaveValue('Amit Patel');

  await expect(emailInput).toHaveValue('amit@example.com');

  // 6. getByText() - Success message
  const successMessage = page.getByText(
    'Registration successful'
  );

  await expect(successMessage).toBeVisible();

  // 7. getByRole() - Login link
  const loginLink = page.getByRole('link', {
    name: 'Login'
  });

  await expect(loginLink).toBeVisible();

  // Keep browser open for 5 seconds for learning
  await page.waitForTimeout(5000);
});