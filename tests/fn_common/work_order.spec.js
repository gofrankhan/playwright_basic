module.exports = {
    createWorkOrder: async (page) => {

    },
};

const { test, expect } = require('@playwright/test');
const { loginFN, logoutFN } = require('./login_logout.spec');


test('test', async ({ page }) => {
    loginFN(page);
    await page.locator('#NavigationV2').getByTestId('IconButton').first().click();
    await page.getByRole('link', { name: 'Work Order' }).click();
    await page.waitForTimeout(20000);
    //await page.waitForLoadState('domcontentloaded');
    await page.getByTestId('advancedWorkOrderTitle').fill('Work Order TItle');
    await page.locator(`xpath = //div[span='No clients']`).click();
    await page.getByTestId('clientDropdown').getByRole('option', { index: 1 }).click();
    await page.locator(`xpath = //div[span='No projects']`).click();
    await page.getByTestId('projectDropdown').getByRole('option', { index: 1 }).click();
    await page.getByTestId('typeOfWorkId').getByText('Select ...').click();
    await page.getByRole('option', { name: 'Automated Teller Machine (ATM)' }).click();
    await page.locator('#WorkOrderFormContainer').getByTestId('Loader-wrapper').click();
    await page.getByTestId('Schedule').click();
    await page.getByRole('link', { name: 'Tomorrow 8am' }).click();
    logoutFN(page);
});

