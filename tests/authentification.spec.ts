import { test, expect } from '../fixture/fixture';

test('user can create an account', async ({ registerPage, testUser, page }) => {
  await page.goto('/');
  await registerPage.signup(testUser!.name, testUser!.email, testUser!.password);

  await expect(page.getByTestId('login-button')).toBeHidden();
});

test('user can login with env credentials', async ({ loginPage, page }) => {
  await page.goto('/');
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  await expect(page.getByTestId('login-button')).toBeHidden();
});

test('user can logout', async ({ loginPage, logoutPage, page }) => {
await page.goto('/');
await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);
await logoutPage.logout();
await logoutPage.expectLogiMessage();
});