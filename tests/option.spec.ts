import { test } from '../fixture/fixture';

test('Profil et options utilisateur', async ({ 
  loginPage, 
  optionsPage, 
  page,
  changeCity
}) => {
  await page.goto('/');

  // Login
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Modifier la ville avec faker
  await optionsPage.updateCity(changeCity!.city);

  // Appliquer les filtres
  await optionsPage.applyFilters();

  // Wishlist + share
  await optionsPage.wishlistAndShare(12);
});
