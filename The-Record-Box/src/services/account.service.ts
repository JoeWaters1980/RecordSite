import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItems } from 'src/model/cart';
import { cartUrl } from 'src/app/Api/api';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getOrders() {
    return this.httpClient.get<CartItems>(cartUrl).pipe(
      map((data: CartItems) => {
        return data;
      }),
      catchError((error) => {
        return throwError('something went wrong');
      })
    );
  }
}
