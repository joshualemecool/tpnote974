import { test } from '../fixture/fixture';
import { generateShipping, generatePayment } from './outils/fakeuser';

test('E2E complet : login → produits → panier → paiement → confirmation → options', async ({
  page,
  loginPage,
  productPage,
  cartPage,
  shippingPage,
  paymentPage,
  confirmationPage,
  optionsPage
}) => {
  // 1️⃣ Login
  await page.goto('/');
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // 2️⃣ Aller sur les produits et ajouter au panier
  await productPage.gotoProducts();
  await productPage.selectProduct(2);
  await productPage.addToCart();
  await productPage.selectProduct(6);
  await productPage.addToCart();

  // 3️⃣ Ouvrir le panier et modifier les quantités / suppression
  await cartPage.openCart();
  await cartPage.increaseQuantity(2);  
  await cartPage.increaseQuantity(6);  
  await cartPage.decreaseQuantity(6);  
  await cartPage.removeItem(6);

  // 4️⃣ Passer au checkout
  await cartPage.checkout();

  // 5️⃣ Livraison
  const shippingData = generateShipping();
  await shippingPage.checkout(shippingData);

  // 6️⃣ Paiement
  const paymentData = generatePayment();
  await paymentPage.pay(paymentData);

  // 7️⃣ Confirmation + track order
  await confirmationPage.confirmAndTrack();

  // 8️⃣ Options / profil / wishlist / share
  await optionsPage.updateCity('ville du loup très méchant graou');
  await optionsPage.applyFilters();
  await optionsPage.wishlistAndShare(12); // id produit exemple
});
