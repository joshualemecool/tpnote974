import { test } from '../fixture/fixture';

test('Profil et options utilisateur', async ({ loginPage, optionsPage, page }) => {
  await page.goto('/');

  // Login
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Modifier la ville
  await optionsPage.updateCity('ville du loup très méchant graou');

  // Appliquer les filtres
  await optionsPage.applyFilters();

  // Wishlist + share pour un produit
  await optionsPage.wishlistAndShare(12);
});
