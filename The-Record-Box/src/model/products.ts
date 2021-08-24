export interface Product {
    productId: string;
    name: string;
    category: string;
    description: string;
    price: number;
}

export interface ProductsResponse {
    Count: number;
    ScannedCount: number;
    Items: Product[];
}