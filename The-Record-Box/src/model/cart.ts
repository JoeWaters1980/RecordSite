import { Product } from './products';

export class CartItems {
  // productId: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  qty: number;
  Id: String;

  constructor(Id: string, product: Product, qty = 1) {
    this.Id = Id;
    // this.productId = product.Id;
    this.productName = product.name;
    this.productDescription = product.description;
    this.productCategory = product.category;
    this.productPrice = product.price;
    this.qty = qty;
  }
}

// export interface CartResponse {
//     Count: number;
//     ScannedCount: number;
//     Items: CartResponse[];
// }
