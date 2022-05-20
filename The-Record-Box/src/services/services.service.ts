import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ProductsResponse } from 'src/model/products';
import { environment } from 'src/environments/environment';
import { cartItems } from 'src/interface/cart';
// import { CartResponse } from 'src/model/cart';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  productURL = environment.dynamoURL;
  cartURL = environment.cartUrl;

  constructor(private httpClient:HttpClient) { }
  // getProducts(){
  //   return this.httpClient.get<ProductsResponse>(this.productURL).toPromise();
  // }

  addToCart(){}

  // getItemsInCart(){
  //   return this.httpClient.get<CartResponse>(this.cartURL).toPromise();
  // }

  // QtyCartIncrease(){}

  // clearCart(){}
}
