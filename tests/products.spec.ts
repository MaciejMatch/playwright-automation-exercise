import { test, expect } from '@playwright/test';


test('Verify products page', async({page}) => {
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name: 'Consent'}).click()
await page.getByRole('link', { name: 'Products' }).click()
await expect(page.getByText('All Products')).toBeVisible()
await expect(page.locator('.product-image-wrapper').first()).toBeVisible()
}
)