import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/LoginPage';

export class PlaywrightTestContext extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;

  constructor(options: any) {
    super(options);
  }
}
  setWorldConstructor(PlaywrightTestContext);