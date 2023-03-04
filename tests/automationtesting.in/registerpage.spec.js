const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationtesting.in/");
    await page.getByRole('link', { name: "Demo Site" }).click();

    page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: "Close" }).click();
});

test('check form header name', async ({ page }) => {
    const formHeaderText = await page.innerText('h2');
    await expect(formHeaderText).toBe("Register");
})

test.afterEach(async ({ page }) => {
    await page.close();
});