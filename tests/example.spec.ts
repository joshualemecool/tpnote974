import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TechHub|E-commerce/);
});

test('page loads', async ({ page }) => {
  await page.goto('/');

  // Verify page loaded successfully
  await expect(page).toHaveURL(/techhubecommerce/);
});
