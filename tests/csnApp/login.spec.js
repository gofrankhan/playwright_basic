const { test, expect } = require('@playwright/test');
const { login_user, login_admin, login_lawyer, logout } = require('./common_methods');

test.describe("Login Cases", async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://127.0.0.1:8000/");
    });

    test("Check The Login Page Title", async ({ page }) => {
        await expect(page).toHaveTitle("Login | CAF PC POINT");
        await expect(page).toHaveTitle(/Login/);
        await expect(page).toHaveTitle(/CAF/);
        await expect(page).toHaveTitle(/POINT/);
    });

    test.skip("Check Login Page Have All Login Elements Avaialable", async ({ page }) => {

    });

    test.skip("Check Insertion of Username", async ({ page }) => {
        await page.getByRole('textbox', { name: "username" }).fill("Playwright Practice");
        await page.locator("#username").fill("Playwright Practice");
        await page.getByPlaceholder("Username").fill("Playwright Practice");
    });

    test.skip("Check Insertion of Password", async ({ page }) => {
        await page.getByRole('textbox', { name: "password" }).fill("Playwright Password");
        await page.locator("#password").fill("Playwright Password");
        await page.getByPlaceholder("Password").fill("Playwright Password");
    });

    test.skip("Click on Remember Me Checkbox", async ({ page }) => {
        await page.getByLabel("Remember Me").check();
    });

    test("Check Valid Login As User", async ({ page }) => {
        login_user(page);
    });

    test("Check Valid Login As Admin", async ({ page }) => {
        login_admin(page);
    });

    test("Check Valid Login As Lawyer", async ({ page }) => {
        login_lawyer(page);
    });

    test("Check All Top Navigation Are Exist", async ({ page }) => {
        login_user(page);
        await page.getByRole('button', { name: "PC Point" }).click();
        await page.getByRole('button', { name: "File" }).click();
        await page.getByRole('button', { name: "Customers" }).click();
        await page.getByRole('button', { name: "Movements" }).click();
    })

    test.afterEach(async ({ page }) => {
        await page.goto("http://127.0.0.1:8000/admin/logout");
        await page.close();
    });
})
