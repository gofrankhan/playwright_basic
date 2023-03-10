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
    await page.waitForTimeout(2000);
    //var settingLocator = await page.locator(`xpath=//button[@data-testid='[object Object]']`);
    //await page.click(settingLocator[1]);
});

//npx playwright test fn_common/staff_user/network_setup.spec.js --headed --project=chromium