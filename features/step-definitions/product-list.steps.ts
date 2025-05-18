import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightTestContext } from '../../support/context';
import { LoginPage } from '../../pages/Login-page';
import { ProductListPage } from '../../pages/Product-list-page';
import { config } from '../../config';

Given('I am logged in', async function (this: PlaywrightTestContext) {
  this.loginPage = new LoginPage(this.page);
  this.productListPage = new ProductListPage(this.page);
  await this.loginPage.navigate();
  await this.loginPage.login(config.username, config.password);
});
Then('I should see the product list loaded with an app logo {string}',{ timeout: 10000 },
  async function (this: PlaywrightTestContext, expectedLogoText: string) {
    await this.productListPage.validateLogoText(expectedLogoText);
    await this.productListPage.isProductListVisible()
});

Then('I should see exactly {int} products displayed', async function (this: PlaywrightTestContext, expectedCount: number) {
  const productCount = await this.productListPage.getProductCount();
  expect(productCount).toBe(expectedCount);
});
