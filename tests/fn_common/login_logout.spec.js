module.exports = {
    loginFN: async (page) => {
        await page.goto("https://ui-qa3.fndev.net");
        await page.getByRole('button', { name: "Continue", exact: true }).click();
        await page.locator("#username").fill("buyer1Admin1612701843");
        await page.locator("#password").fill("F1eldN@tion");
        await page.getByRole('button', { name: "Log in" }).click();
    },
    logoutFN: async (page) => {
        await page.locator(`xpath = //button[contains(@class, 'User__oWq6r')]`).click();
        await page.getByRole('link', { name: "Log Out" }).click();
        await page.close();
    }
};