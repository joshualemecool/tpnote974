import { Page, expect } from '@playwright/test';

export class OptionsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Modifier la ville du profil
  async updateCity(newCity: string) {
    await this.page.getByTestId('user-menu-button').click();
    await this.page.getByTestId('account-link').click();
    await this.page.getByRole('tab', { name: 'Profil' }).click();
    await this.page.getByRole('button', { name: 'Modifier' }).click();
    await this.page.getByRole('textbox', { name: 'Paris' }).fill(newCity);
    await this.page.getByRole('button', { name: 'Enregistrer' }).click();
  }

  // Appliquer des filtres et accéder à une catégorie
  async applyFilters() {
    await this.page.getByRole('link', { name: 'Gaming' }).click();
    await this.page.getByRole('button', { name: 'Filtres' }).click();
    await this.page.getByRole('button', { name: 'Plus de 200€' }).click();
  }

  // Ajouter produit à wishlist et partager, même si ça marche pas vraiment sur le site mais au moins ça clique dessus
  async wishlistAndShare(productTestId: number) {
    await this.page.getByTestId(`product-card-${productTestId}`).click();
    await this.page.getByTestId('product-detail-wishlist-button').click();
    await this.page.getByTestId('product-detail-share-button').click();
  }
}
