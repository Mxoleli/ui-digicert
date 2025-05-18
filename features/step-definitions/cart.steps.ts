import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightTestContext } from '../../support/context';
import { ProductListPage } from '../../pages/Product-list-page';
import { ShoppingCartPage } from '../../pages/Cart-page';

Given('I am on the product list page', async function (this: PlaywrightTestContext) {
  this.productListPage = new ProductListPage(this.page);
  await this.productListPage.isProductListVisible()
});

When('I add the product to the cart', async function (this: PlaywrightTestContext) {;
  await this.productListPage.addProductToCart();
});

When('I navigate to the cart', async function (this: PlaywrightTestContext) {
  await this.productListPage.goToCart();
  this.shoppingCartPage = new ShoppingCartPage(this.page);
});

Then('I should see {string} listed in the cart', async function (this: PlaywrightTestContext, productName: string) {
  const isListed = await this.shoppingCartPage.isProductInCart(productName);
  expect(isListed).toBe(true);
});

Given('the product {string} is already in the cart', async function (this: PlaywrightTestContext, productName: string) {
  this.productListPage = new ProductListPage(this.page);
  this.shoppingCartPage = new ShoppingCartPage(this.page);
  await this.productListPage.addProductToCart();
  await this.productListPage.goToCart();
});

When('I remove the product {string} from the cart', async function (this: PlaywrightTestContext, productName: string) {
  await this.shoppingCartPage.removeProductFromCart(productName);
});

Then('I should not see {string} in the cart', async function (this: PlaywrightTestContext, productName: string) {
  const isListed = await this.shoppingCartPage.isProductInCart(productName);
  expect(isListed).toBe(false);
});

When('I click on the checkout button', async function (this: PlaywrightTestContext) {
  await this.shoppingCartPage.clickCheckout();
});
