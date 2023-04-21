const { test, expect } = require('@playwright/test');

test('Create Work Order Case - How To/Technical assitance', async ({ page }) => {
    //Login to a account
    await page.goto("https://ui-qa3.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("buyer1Admin1671623060");
    await page.locator("#password").fill("F1eldN@tion");
    await page.getByRole('button', { name: "Log in" }).click();

    // Create a Work Order
    await page.locator('#NavigationV2').getByTestId('IconButton').first().click();
    await page.getByRole('link', { name: 'Work Order', exact: true }).first().click();
    await page.getByTestId('typeOfWorkId').getByText('Select ...').click();
    await page.getByRole('option', { name: 'Automated Teller Machine (ATM)' }).click();
    await page.waitForTimeout(2000);
    await page.getByTestId('serviceTypeSelection').getByText('Please choose one or more service type').click();
    await page.getByRole('option', { name: 'Installation', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.locator(`xpath=//div[text()='Use saved location']`).click();
    await page.getByTestId('locationId').getByText('Select ...').click();
    await page.keyboard.press('M');
    await page.getByRole('option', { name: 'MyAddress' }).click();
    await page.waitForTimeout(2000);
    await page.getByTestId('Schedule').click();
    await page.getByRole('link', { name: 'Tomorrow 8am' }).click();
    await page.waitForTimeout(2000);
    await page.locator(`xpath=//div[@class="ql-editor ql-blank"]`).first().fill("Service Description");
    await page.locator(`xpath=//div[@class="ql-editor ql-blank"]`).nth(-1).fill("Confidential Information");
    await page.locator(`xpath=//div[text()='Fixed']`).click();
    await page.getByTestId('baseAmountInput').fill("200");
    await page.getByTestId('approxHoursFixedInput').fill("2");
    await page.waitForTimeout(2000);
    await page.locator("#title").fill('Work Order Title');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: "Publish", exact: true }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: "Report Problem" }).click();
    await page.waitForTimeout(2000);
    await page.locator('#reportProblemDropDown').selectOption('73');
    await page.getByRole('textbox').fill('Test Text');
    await page.getByTestId('Report Problem').click();


    //Naviage to support case page
    await page.locator(`xpath = //button[contains(@data-nw-file, 'User')]`).click();
    await page.locator(`xpath = //div[text()='Help']`).click();
    await page.getByRole('link', { name: "Company Cases" }).click();
    await page.locator(`xpath = //span[text()="Create Case"]`).click();
    await page.waitForTimeout(2000);
});