/**
 * This file contains the login page objects
 */
import { Page } from 'playwright';
import { config } from '../config';
import { loginLocators } from '../page-elements/LoginElements';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(config.baseUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill(loginLocators.usernameTxt, username);
    await this.page.fill(loginLocators.passwordTxt, password);
    await this.page.click(loginLocators.loginBtn);
  }

  async isDashboardVisible(): Promise<boolean> {
    return this.page.isVisible(loginLocators.dashboard);
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return this.page.isVisible(loginLocators.incorrectCredentialsMessage);
  }
}