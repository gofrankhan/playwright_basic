const { test, expect } = require('@playwright/test');

test('Create Work Order Case - How To/Technical assitance', async ({ page }) => {
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("buyer1Admin1612701843");
    await page.locator("#password").fill("F1eldN@tion");
    await page.getByRole('button', { name: "Log in" }).click();
})