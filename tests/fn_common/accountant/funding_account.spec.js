const { test, expect } = require('@playwright/test');

test("Accountant Finance Account Creation", async ({ page }) => {
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("accountant");
    await page.locator("#password").fill("accountant");
    await page.getByRole('button', { name: "Log in" }).click();
    await page.getByRole('button', { name: 'Funding' }).click();
    await page.getByRole('link', { name: 'Funding Options' }).click();
    await page.getByText('Add', { exact: true }).click();
    await page.getByRole('combobox', { name: 'Company Name:' }).selectOption('25954');
    await page.waitForTimeout(2000);
    await page.locator(`xpath=//input[@id='typeahead_input']`).type('Buyer Field 01', { delay: 100 });
    await page.locator(`xpath=//strong[@class='tt-highlight']`).click();
    await page.waitForTimeout(2000);
    const isVisible1 = await page.locator(`#clearBtn`).isVisible();
    console.log(`Element is visible: ${isVisible1}`);
    await page.locator(`#clearBtn`).click();
    const isVisible = await page.locator(`#clearBtn`).isVisible(); `:q`
    console.log(`Element is visible: ${isVisible}`);
    await page.getByRole('button', { name: "Update", exact: true }).click();
});