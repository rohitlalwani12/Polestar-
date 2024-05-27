import { test, expect, chromium } from '@playwright/test';
import { BasePage } from '../pages/basePage';


test.afterEach(async ({ page }) => {
  console.log(`Finished ${test.info().title} with status ${test.info().status}`);
});

test.describe('Polestar Home Page ', () => {

  test.beforeEach(async ({ page }) => {
    const basePage =new BasePage(page);
    await basePage.goto();
  });

  test.describe.configure({ mode: 'parallel' });
  test('Verify Page Title @chromium', async ({ page }) => {
    
    // Verify that the page title is "Get started | Polestar Developer Portal".
    await expect(page).toHaveTitle("Pure progressive performance | Polestar");
  });
  
  test('Verify Return Home Section is present @chromium', async ({ page }) => {

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText('Return Home')).toBeVisible();
  });
  
  test('Verify Footer Section @chromium', async ({ page }) => {
    
    await expect(page.getByText('Stay up to date on the latest Polestar news')).toBeVisible();
  });
  
  
});

