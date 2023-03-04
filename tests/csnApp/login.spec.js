const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/");
});

test.skip("Check The Login Page Title", async ({ page }) => {
    await expect(page).toHaveTitle("Login | Upcube | Admin");
    await expect(page).toHaveTitle(/Login/);
    await expect(page).toHaveTitle(/Upcube/);
    await expect(page).toHaveTitle(/Admin/);
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

test("Check Valid Login As Gofran Khan", async ({ page }) => {
    await page.locator("#username").fill("gofran.khan");
    await page.locator("#password").fill("123");
    await page.getByRole('button', { name: "Log In" }).click();
})

test.afterEach(async ({ page }) => {
    await page.close();
});