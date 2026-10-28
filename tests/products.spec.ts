import { test, expect } from '@playwright/test';


test('Verify products page', async({page}) => {
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name: 'Consent'}).click()
await page.getByRole('link', { name: 'Products' }).click()
await expect(page.getByText('All Products')).toBeVisible()
await expect(page.locator('.product-image-wrapper').first()).toBeVisible()
}
)



test('Check Blue Top in Products', async({page}) => {
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name: 'Consent'}).click()
await page.getByRole('link', { name: 'Products' }).click()
await page.getByPlaceholder('Search Product').fill('Blue Top')
await page.locator('#submit_search').click()
await expect(page.getByText('Searched Products')).toBeVisible()
await expect(page.locator('.product-image-wrapper').first().locator('.productinfo p')
).toHaveText('Blue Top')
})


test('Add Blue Top to cart', async ({ page }) => {
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name: 'Consent'}).click()
await page.getByRole('link', { name: 'Products' }).click()
await page.getByPlaceholder('Search Product').fill('Blue Top')
await page.locator('#submit_search').click()
await page.locator('[data-product-id="1"]').first().click()
await expect(page.getByText('Your product has been added to cart.')).toBeVisible()
await page.getByRole('link',{name: 'View Cart'}).click()
await expect(page.getByRole('link', { name: 'Blue Top' })).toBeVisible()
})