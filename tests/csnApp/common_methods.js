module.exports = {
    login_user: async (page) => {
        await page.locator("#username").fill("gofran.khan");
        await page.locator("#password").fill("123");
        await page.getByRole('button', { name: "Log In" }).click();
    },
    login_admin: async (page) => {
        await page.locator("#username").fill("gofran.khan11");
        await page.locator("#password").fill("qweasd123");
        await page.getByRole('button', { name: "Log In" }).click();
    },
    login_lawyer: async (page) => {
        await page.locator("#username").fill("lawyer");
        await page.locator("#password").fill("12qw!@QW");
        await page.getByRole('button', { name: "Log In" }).click();
    }
}