import { expect } from '@playwright/test';
import { ProductListLocators } from '../page-elements/Product-list-elements';
export class ProductListPage {
  constructor(private page: any) {}

  async validateLogoText(expectedLogoText: string) {
    const logo = this.page.locator(ProductListLocators.appLogo);
    await expect(logo).toBeVisible();
    const logoText = await logo.innerText();
    expect(logoText).toBe(expectedLogoText);
  }
  async isProductListVisible() {
    await expect(this.page.locator(ProductListLocators.productPage)).toBeVisible();
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator(ProductListLocators.productItem).count();
  }

  //Add product to cart functionality 
  async addProductToCart(): Promise<void> {
  await this.page.locator(ProductListLocators.addToCartButton).click();
}

async goToCart(): Promise<void> {
  await this.page.click(ProductListLocators.shoppingCartLink);
  await expect(this.page.locator(ProductListLocators.iten4TittleLinkName)).toBeVisible();
}

}