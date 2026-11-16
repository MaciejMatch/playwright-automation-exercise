import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
await page.goto('https://automationexercise.com/products')
});


test('Verify products page', async({page}) => {
await page.getByRole('button', {name: 'Consent'}).click();
await expect(page.getByText('All Products')).toBeVisible();
await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
});



test('Check Blue Top in Products', async({page}) => {
await page.getByRole('button', {name: 'Consent'}).click();
await page.getByPlaceholder('Search Product').fill('Blue Top');
await page.locator('#submit_search').click();
await expect(page.getByText('Searched Products')).toBeVisible();
await expect(page.locator('.product-image-wrapper').first().locator('.productinfo p')
).toHaveText('Blue Top');
});


test('Add Blue Top to cart', async ({ page }) => {
await page.getByRole('button', {name: 'Consent'}).click();
await page.getByPlaceholder('Search Product').fill('Blue Top');
await page.locator('#submit_search').click();
await page.locator('[data-product-id="1"]').first().click();
await expect(page.getByText('Your product has been added to cart.')).toBeVisible();
await page.getByRole('link',{name: 'View Cart'}).click();
await expect(page.getByRole('link', { name: 'Blue Top' })).toBeVisible();
});


test('Search products containing Blue', async ({ page }) => {
await page.getByRole('button', {name: 'Consent'}).click();
await page.getByPlaceholder('Search Product').fill('Blue');
await page.locator('#submit_search').click();
const productLocators = page.locator('.product-image-wrapper .productinfo p');
await expect(productLocators.first()).toBeVisible();
const productNames = await productLocators.allTextContents();
for (const product of productNames) {
expect(product.toLowerCase()).toContain('blue');
}
});



