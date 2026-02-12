import { test, expect } from '../fixture/fixture';

test('Ajout de produits au panier (flemme de parler anglais)', async ({ loginPage, productPage, cartPage, page }) => {
  // Login rapide
  await page.goto('/');
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Ajouter quelques produits
  await productPage.gotoProducts();
  await productPage.selectProduct(2);
  await productPage.addToCart();
  await productPage.selectProduct(6);
  await productPage.addToCart();

  // Ouvrir panier pour vérifier
  await cartPage.openCart();

  
  // vérifier que le produit 8 est dans le panier avec la quantité choisit
  await cartPage.expectQuantity(2, 1);
  await cartPage.expectQuantity(6, 1);
});

test('login, ajout produits, panier, modifier quantité, supprimer', async ({ loginPage, productPage, cartPage, page }) => {
  // Se connecter avec l’utilisateur de test
  await page.goto('/');
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Naviguer vers produits et ajouter
  await productPage.gotoProducts();
  await productPage.selectProduct(8);
  await productPage.addToCart();

  await productPage.selectProduct(4);
  await productPage.addToCart();

  // Ouvrir le panier
  await cartPage.openCart();

  // Modifier quantité du produit 8
  await cartPage.increaseQuantity(8);
  await cartPage.increaseQuantity(8);
  await cartPage.decreaseQuantity(8);

  // Supprimer le produit 4
  await cartPage.removeItem(4);

  await cartPage.expectQuantity(8, 2);
});
