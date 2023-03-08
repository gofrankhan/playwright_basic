const { test, expect } = require('@playwright/test');

test("Accountant", async ({ page }) => {
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("accountant");
    await page.locator("#password").fill("accountant");
    await page.getByRole('button', { name: "Log in" }).click();
    await page.getByRole('button', { name: 'Funding' }).click();
    await page.getByRole('link', { name: 'Funding Options' }).click();
    await page.getByText('Add', { exact: true }).click();
    await page.getByRole('combobox', { name: 'Company Name:' }).selectOption('9739');
    await page.locator(`xpath=//input[@id='typeahead_input']`).fill('sdfgsdfg');
    await page.getByRole('button', { name: "Continue", exact: true }).click();
});