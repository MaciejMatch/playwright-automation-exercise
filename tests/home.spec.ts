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

test('Login failed', async({page}) =>{
await page.goto('https://automationexercise.com/')
await page.getByRole('button', {name:'Consent'}).click()
await page.getByRole('link', {name: 'Signup / Login'}).click()
await page.locator('form[action="/login"] input[type="email"]').fill('nieistnieje123@example.com')
await page.locator('form[action="/login"] input[type="password"]').fill('wrongpassword123')
await page.getByRole('button', {name: 'Login'}).click()
await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()
})