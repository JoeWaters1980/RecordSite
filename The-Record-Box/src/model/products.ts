export class Product {
  Id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imgUrl: string;

  constructor(
    Id='0',
    name='',
    description='',
    category='',
    price=0,
    imgUrl='/assets/images/disc.jpg'
  ) {
    this.Id = Id;
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
