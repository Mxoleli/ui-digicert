import { Page } from 'playwright';
import { ShoppingCartLocators } from '../page-elements/shopping-cart-elements';
export class ShoppingCartPage {
    constructor(private page: Page) {}

async isProductInCart(productName: string): Promise<boolean> {
   return this.page.locator(`.cart_item:has-text("${productName}")`).isVisible();
}

async removeProductFromCart(productName: string): Promise<void> {
  await this.page.locator(`.cart_item:has-text("${productName}")`).locator('button:has-text("Remove")').click();
}

}