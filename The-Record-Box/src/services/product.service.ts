import { Injectable } from '@angular/core';
import { Product } from 'src/model/products';
import { HttpClient } from '@angular/common/http';
import {dynamoURL} from 'src/app/Api/api';
import { Observable, throwError } from 'rxjs';
import{map,catchError}from 'rxjs/operators';
import { Products } from 'src/interface/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   // new Product ('1a','record 1','this is a record', 'records 1',25),
  //   // new Product ('2a','record 2','this is a record', 'records 2',25),
  //   // new Product ('3a','record 3','this is a record', 'records 3',25),
  //   // new Product ('4a','record 4','this is a record', 'records 4',25),
  //   // new Product ('5a','record 5','this is a record', 'records 5',25),
  //   // new Product ('6a','record 5','this is a record', 'records 6',25)
    
  // ]

  constructor(private httpClient:HttpClient) { }

  // getProducts():Observable<Products[]>{
  //   return this.httpClient.get<Products[]>(dynamoURL);
  // }
  getProducts(){
    return this.httpClient.get<Products>(dynamoURL).pipe(
      map((data:Products)=>{
      return data;
    }), catchError( error => {
      return throwError('something went wrong');
    })
    )
  }
  // getProducts(): Product[]{
  //   // implement API for this method so we can return an observable.

  //   return this.products
  // }

}


