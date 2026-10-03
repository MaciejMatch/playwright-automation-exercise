import { test, expect } from '@playwright/test';

test('should display home page', async({page}) => {
await page.goto('https://automationexercise.com/')
await expect(page.getByRole('link', { name: 'Signup / Login'})).toBeVisible()
})


test('should navigate to login page', async({page}) => {
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name:'Consent'}).click()
await page.getByRole('link', {name: 'Signup / Login'}).click()
await expect(page.getByRole('heading', {name: 'Login to your account'})).toBeVisible()
})