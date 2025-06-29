import { test, expect } from '@playwright/test';
import * as constants from '../../utils/constants';
import SinglePage from '../models/SinglePage'

test.describe('Validate UI of single page screen', { tag: '@ui',}, () => {
  let sp: SinglePage;

  test.beforeEach(async ({ page }) => {
   await page.goto(constants.SINGLE_PAGE_ADDRESS) 
   sp = new SinglePage(page);
  });

  // some examples of tests that check UI
  test('has title', async ({ page }) => {
    expect(await sp.title.isVisible()).toBe(true)
    await expect(sp.title).toHaveText(constants.SINGLE_PAGE_TITLE)
  });

  test('has user input field label', async ({ page }) => {
    expect(await sp.userLabel.isVisible()).toBe(true)
    await expect(sp.userLabel).toHaveText(constants.USER_LABEL);
  });

  test('has user input field & placeholder', async ({ page }) => {
    expect(await sp.userInput.isVisible()).toBe(true)
    const inputText = await sp.userInput.inputValue()
    expect(inputText).toBe('')
    const placeholderText = await sp.userInput.getAttribute('placeholder')
    expect(placeholderText).toBe(constants.USER_PLACEHOLDER)
  });

  test('has password input field label', async ({ page }) => {
    expect(await sp.passwordLabel.isVisible()).toBe(true)
    await expect(sp.passwordLabel).toHaveText(constants.PASSWORD_LABEL);
  });

  test('has password input field', async ({ page }) => {
    expect(await sp.passwordInput.isVisible()).toBe(true)
    const inputText = await sp.passwordInput.inputValue()
    expect(inputText).toBe('')
  });

  test('has login buton', async ({ page }) => {
    expect(await sp.loginButton.isVisible()).toBe(true)
    await expect(sp.loginButton).toHaveText(constants.LOGIN_BUTTON_NAME);
  })

   test('has footer', async ({ page }) => {
    expect(await sp.footerText.isVisible()).toBe(true)
    await expect(sp.footerText).toHaveText(constants.FOOTER_TEXT);
  });

});
