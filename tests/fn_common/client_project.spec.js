module.exports = {
    createClient: async (page) => {
        var maxValue = 10;
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        for (let i = 0; i < maxValue; i++) {
            await page.locator('#NavigationV2').getByTestId('IconButton').first().click();
            await page.getByRole('link', { name: 'Client' }).click();
            await page.getByTestId('ClientTitle').fill(fruits[i % fruits.length] + (i + 10));
            await page.getByTestId('Create Client').click();
        }
    },

    createProjectForClient: async (page) => {
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
    }
};