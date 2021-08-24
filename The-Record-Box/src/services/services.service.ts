import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from 'src/model/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  productURL = environment.dynamoURL;

  constructor(private httpClient:HttpClient) { }
  getProducts(){
    return this.httpClient.get<ProductsResponse>(this.productURL).toPromise()
  }
}
