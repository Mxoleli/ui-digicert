import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/Login-page';
import { ProductListPage } from '../pages/Product-list-page';

export class PlaywrightTestContext extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  productListPage!: ProductListPage;

  constructor(options: any) {
    super(options);
  }
}
  setWorldConstructor(PlaywrightTestContext);