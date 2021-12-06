export class Product {
  // Id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  // imgUrl: string;
  qty: number;

  constructor(
    // Id: string,
    name: string,
    description:string,
    category:string,
    price:number,
    // imgUrl='/assets/images/disc.jpg'
  ) {
    // this.Id = Id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.qty=0;
    // this.imgUrl = imgUrl;
  }
}

// export interface ProductsResponse {
//     Count: number;
//     ScannedCount: number;
//     Items: Product[];
// }
