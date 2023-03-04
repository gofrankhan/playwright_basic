const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto("https://ui-int2.fndev.net");
    await page.getByRole('button', { name: "Continue", exact: true }).click();
    await page.locator("#username").fill("buyer1Admin1554681362");
    await page.locator("#password").fill("F1eldN@tion");
    await page.getByRole('button', { name: "Log in" }).click();
});

test.skip("Check Flightbaord Text in Buyer Account", async ({ page }) => {
    await page.getByRole('h1', { name: "Flightboard" });
});

test.skip("Create Multiple Client", async ({ page }) => {
    var maxValue = 10;
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    for (let i = 0; i < maxValue; i++) {
        await page.locator('#NavigationV2').getByTestId('IconButton').first().click();
        await page.getByRole('link', { name: 'Client' }).click();
        await page.getByTestId('ClientTitle').fill(fruits[i % fruits.length] + (i + 10));
        await page.getByTestId('Create Client').click();
    }

});

test("Create Multiple Project With Client", async ({ page }) => {

    var maxValue = 10;
    var index = 0;
    const cars = ["Marcedice", "Farari", "Audi", "Volkwagon", "Lamborgini"];
    for (let i = 0; i < maxValue; i++) {
        await page.locator('#NavigationV2').getByTestId('IconButton').first().click();
        await page.getByRole('link', { name: 'Project' }).click();
        await page.getByTestId('ProjectTitle').click();
        await page.getByTestId('ProjectTitle').fill(cars[i % cars.length] + i);
        await page.getByRole('combobox').selectOption({ index: index++ });
        if (index > 5) index = 0;
        await page.getByTestId('Create Project').click();
    }
});

test.afterEach(async ({ page }) => {
    await page.locator(`xpath = //button[contains(@class, 'User__oWq6r')]`).click();
    await page.getByRole('link', { name: "Log Out" }).click();
    await page.close();
});