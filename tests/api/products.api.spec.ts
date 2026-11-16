import { test, expect } from '@playwright/test'
import type { ProductsResponse, ErrorResponse } from '../../types/products.types'

test('GET all products', async ({ request }) => {
const response = await request.get('https://automationexercise.com/api/productsList');
expect(response.status()).toBe(200);
const body: ProductsResponse = await response.json();
const blueTop = body.products.find(blue => blue.name === 'Blue Top');
expect(blueTop).toBeDefined();
expect(blueTop?.name).toBe('Blue Top');
expect(blueTop?.price).toBe('Rs. 500');
expect(blueTop?.brand).toBe('Polo');
});


test('POST products list should be rejected', async ({ request }) => {
const response = await request.post('https://automationexercise.com/api/productsList');
const body: ErrorResponse = await response.json();
expect(response.status()).toBe(200);
expect(body.responseCode).toBe(405);
expect(body.message).toEqual('This request method is not supported.');
})


test('Search products by keyword', async ({ request }) => {
const response = await request.post('https://automationexercise.com/api/searchProduct', {
    form: {
        search_product: 'top'
    }
});
expect(response.status()).toBe(200);
const body: ProductsResponse = await response.json();
expect(body.responseCode).toBe(200);
expect(body.products.length).toBeGreaterThan(0);
const blueTop = body.products.find(product => product.name === 'Blue Top');
expect(blueTop).toBeDefined();
expect(blueTop?.name).toBe('Blue Top');
});


test('Search products without parameter', async ({ request }) => {
const response = await request.post('https://automationexercise.com/api/searchProduct' , {
})
const body: ErrorResponse = await response.json();
expect(response.status()).toBe(200);
expect(body.responseCode).toBe(400);
expect(body.message).toEqual('Bad request, search_product parameter is missing in POST request.')
});





