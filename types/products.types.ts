export type Product = {
    id: number
    name: string
    price: string
    brand: string
}

export type ProductsResponse = {
    responseCode: number
    products: Product[]
}

export type ErrorResponse = {
    responseCode: number
    message: string
}