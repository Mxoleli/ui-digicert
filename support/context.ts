import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/Login-page';
import { ProductListPage } from '../pages/Product-list-page';
import { ShoppingCartPage } from '../pages/Cart-page';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/Overview-page';
import { ConfirmationPage } from '../pages/Confirmation-page';

export class PlaywrightTestContext extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  productListPage!: ProductListPage;
  shoppingCartPage!: ShoppingCartPage;
  checkoutPage!: CheckoutPage;
  overviewPage!: OverviewPage;
  confirmationPage!: ConfirmationPage;

  constructor(options: any) {
    super(options);
  }
}
  setWorldConstructor(PlaywrightTestContext);