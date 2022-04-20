import { Product } from './products';

export class CartItems {
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  qty: number;
  productId: String;
  cartId:String;
  productImage:string;
  userId:string;
  

  constructor(id: string, product: Product, qty = 1, userId:string) {
    this.cartId=id;
     this.productId = product.Id;
    this.productName = product.name;
    this.productDescription = product.description;
    this.productCategory = product.category;
    this.productPrice = product.price;
    this.qty = qty;
    this.productImage= product.Image;
    this.userId=userId;
  }
}

// export interface CartResponse {
//     Count: number;
//     ScannedCount: number;
//     Items: CartResponse[];
// }
