export interface cartItems {
    productId: string;
    name: string;
    category: string;
    description: string;
    price: number;
    qty:number
}

export interface CartResponse {
    Count: number;
    ScannedCount: number;
    Items: CartResponse[];
}