export class Product {
  productId: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imgUrl: string;

  constructor(
    productId: string,
    name: string,
    description: string,
    category: string,
    price: number,
    imgUrl='/assets/images/disc.jpg'
  ) {
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

// export interface ProductsResponse {
//     Count: number;
//     ScannedCount: number;
//     Items: Product[];
// }
