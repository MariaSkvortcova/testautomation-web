import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import * as constants from '../../utils/constants';

test.describe('loginpage', () => { 
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(constants.SINGLE_PAGE_ADDRESS);
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});