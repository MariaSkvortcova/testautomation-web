import { test, expect } from '@playwright/test';
import SinglePage from '../models/SinglePage'
import * as constants from '../../utils/constants';

test.describe(`Validate functionality of single page screen`, () => {
  let sp: SinglePage;

  test.beforeEach(async ({ page }) => {
    await page.goto(constants.SINGLE_PAGE_ADDRESS);
    sp = new SinglePage(page);
  });

  // some examples of functional tests
  constants.users.forEach(({ email, password }) => {
    test(`testing user with correct credentials with ${email}`, async () => {
      await sp.login(email, password);
      expect(await sp.homeNav.isVisible()).toBe(true) 
     });
  });

  constants.usersIncorrectCredentials.forEach(({ email, password }) => {
    test(`testing user with incorrect credentials with ${email}`, async () => {
      await sp.login(email, password);
      expect(await sp.homeNav.isVisible()).toBe(false)
    });
   });

  // assumption - input fields shoul be cleaned up after user logged in
  // in current web app implementation this test will FAIL
  test(`logout should redirect user to Login page and input fields should be empty`, async () => {
    await sp.login(constants.users[0].email, constants.users[0].password);
    await sp.logout;
    expect(await sp.userInput.inputValue()).toEqual('')
    expect(await sp.passwordInput.inputValue()).toEqual('')
  });
});
