const { test, expect } = require('@playwright/test');
const { loginFN, logoutFN } = require('./login_logout.spec');

const fruits = ["Banana", "Orange", "Apple", "Mango", "Marcedice", "Farari", "Audi", "Volkwagon", "Lamborgini"];

test('New Test Yes', async ({ page }) => {
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("buyer1Admin1612701843");
    await page.locator("#password").fill("F1eldN@tion");
    await page.getByRole('button', { name: "Log in" }).click();
    // await page.goto('https://ui-qa3.fndev.net/workorders');
    await page.getByRole('button', { name: 'Manage' }).click();
    await page.getByRole('link', { name: 'Custom Fields' }).click();
    for (let i = 10; i < 100; i++) {
        await page.getByTestId('actions-menu-secondary').click();
        await page.getByRole('button', { name: 'Work Order Field' }).click();
        await page.getByLabel('Custom Field Name').fill(fruits[i % 9] + (i));
        await page.locator(`xpath=//div[@class="Select-placeholder"]`).click();
        await page.getByTestId('Save').click();
    }
});