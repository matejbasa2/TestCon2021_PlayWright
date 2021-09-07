const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com');
  const title = page.locator('#logo_homepage_link');
  await expect(isLogoVisible).toBe(true);

});