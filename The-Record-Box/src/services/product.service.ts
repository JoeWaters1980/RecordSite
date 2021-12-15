import { Injectable } from '@angular/core';
import { Product } from 'src/model/products';
import { HttpClient } from '@angular/common/http';
import { dynamoURL } from 'src/app/Api/api';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Products } from 'src/interface/Products';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // getCartProducts():Observable<cartItems[]>{
  //   return this.httpClient.get<Products[]>(dynamoURL);
  // }
  getProducts() {
    return this.httpClient.get<Product>(dynamoURL).pipe(
      map((data: Product) => {
        return data;
      }),
      catchError((error) => {
        return throwError('something went wrong');
      })
    );
  }

  // addNewProduct(){
  //   return this.httpClient.post<Product>(dynamoURL).pipe(
  //     map((data: Product) => {
  //       return data;
  //     }),
  //     catchError((error) => {
  //       return throwError('something went wrong');
  //     })
  //   );
  // }
}
