export class Product {
  // Id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  Image: string;
  qty: number;

  constructor(
    // Id: string,
    name: string,
    description:string,
    category:string,
    price:number,
    image:string
  ) {
    // this.Id = Id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.qty=0;
    this.Image = image;
  }
}

// export interface ProductsResponse {
//     Count: number;
//     ScannedCount: number;
//     Items: Product[];
// }
