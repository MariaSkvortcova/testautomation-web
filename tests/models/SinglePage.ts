import type { Locator,Page } from '@playwright/test';
import { expect } from '@playwright/test';

export default class LoginPage {

  readonly page: Page;
  readonly title: Locator;
  readonly userLabel: Locator;
  readonly passwordLabel: Locator;
  readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly footerText: Locator;
  readonly homeNav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1');
    this.userLabel = page.locator('label').nth(0)
    this.passwordLabel = page.locator('label').nth(1)
    this.userInput = page.locator('input#email');
    this.passwordInput = page.locator('input#password');
    this.loginButton = page.locator('input#login')
    this.footerText = page.locator('footer')
    this.profileButton =  page.locator('[onclick="showUser()"]')
    this.logoutButton = page.locator('#logout')
    this.homeNav = page.locator('.home')
  }
  
  async login(email, password ) {
    await this.userInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginButton.click();
  }
  
  async logout() {
    await this.profileButton.click();
    await expect(this.logoutButton).toBeVisible()
    await this.logoutButton.click();
  }
}