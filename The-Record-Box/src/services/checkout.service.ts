import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { cartUrl } from 'src/app/Api/api';
import { CartItems } from 'src/model/cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient:HttpClient) { }
  CheckOutItems(items:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `bearer ${localStorage.getItem('key')}`
      })
    }

      
    return this.httpClient.post<CartItems>(cartUrl,{items},httpOptions).pipe(
     catchError( error => {
      return throwError('something went wrong');
    }))
  }
}
