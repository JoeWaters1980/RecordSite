import { Injectable } from '@angular/core';
import { Product } from 'src/model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product ('1a','record 1','this is a record', 'records 1',25),
    new Product ('2a','record 2','this is a record', 'records 2',25),
    new Product ('3a','record 3','this is a record', 'records 3',25),
    new Product ('4a','record 4','this is a record', 'records 4',25),
    new Product ('5a','record 5','this is a record', 'records 5',25),
    new Product ('6a','record 5','this is a record', 'records 6',25)
    
  ]

  constructor() { }
  
  getProducts(): Product[]{
    // implement API for this method so we can return an observable.
    return this.products
  }
  
}
