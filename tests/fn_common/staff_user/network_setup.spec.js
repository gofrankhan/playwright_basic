const { test, expect } = require('@playwright/test');

test('Network Setup', async ({ page }) => {
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("staff");
    await page.locator("#password").fill("staff");
    await page.getByRole('button', { name: "Log in" }).click();
    await page.getByRole('button', { name: "Site Configuration" }).click();
    await page.getByRole('link', { name: "Networks" }).click();
    await page.locator(`xpath=//input[@type='search']`).fill("Field Nation Staffing");
    await page.locator(`xpath=//div[@class='js-fixed-data-table-cell-row-0']//a[text()='Field Nation Staffing']`).click();
    await page.locator(`xpath=//span[@class='TitleBar__icon__Afy5r TitleBar__icon--settings__331QS']`).click();
    await page.locator(`xpath=//button/div/div[text()='Payment, Fees, and Access']`).click();
    await page.locator(`xpath=//span[@class='icon-plus']`).click();
    await page.locator(`//input[@class='resizable-input']`).fill("Test B00016");
    await page.keyboard.press('Enter');
    await page.locator(`xpath=//button[@data-testid='Add']`).click();
    await page.waitForTimeout(2000);
    await page.locator(`xpath=//button[@data-testid='Apply Changes']`).click();
    await page.waitForTimeout(2000);
});

//npx playwright test fn_common/staff_user/network_setup.spec.js --headed --project=chromium