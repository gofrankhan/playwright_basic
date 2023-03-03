// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationtesting.in/');
});

test('launch the homepage of automationtesting.in', async ({ page }) => {
    await expect(page).toHaveTitle('Home-Selenium Webdriver Appium Complete Tutorial');
    await expect(page).toHaveTitle(/Selenium Webdriver/);
    await expect(page).toHaveURL('https://automationtesting.in/');
    await expect(page).toHaveURL(/automationtesting/);
});

test('navigate to demo site', async ({ page }) => {
    await page.getByRole('link', { name: 'Demo Site' }).click();
    const titleHeader = await page.innerText('h1');
    await expect(titleHeader).toBe("Automation Demo Site");
    await expect(titleHeader).toContain("Automation");
});

test.afterEach(async ({ page }) => {
    page.close();
})
