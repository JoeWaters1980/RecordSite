import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { cartUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';
import { map, catchError } from 'rxjs/operators';
import { Products } from '../../../interface/Products';
import { throwError } from 'rxjs';
import { CartItems } from 'src/model/cart';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  email = null;
  orderItems: CartItems[] = [];
  constructor(private msg: MessengerService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    var access_token;
    var decode:any;
    var firstLogin = localStorage.getItem('key') === null;
    if (window.location.hash) {
      access_token = new URLSearchParams(
        window.location.hash.replace('#', '?')
      ).get('id_token');
      // console.log(access_token);
      localStorage.setItem('key', access_token ?? '');
    }
    else{
      access_token=localStorage.getItem('key');
    }
    decode =access_token? jwt_decode(access_token):'';
    // console.log(decode);
    this.email = decode.email;
    if (access_token != undefined && firstLogin) {
      this.msg.logInMessage(true);
      window.location.reload();
    }
    this.getOrders().subscribe((data: any) => {
       
      this.orderItems = Object.values(data.body);
      // console.log(data.body);
        // console.log(this.listProducts);
    });
  }
  getOrders() {
    return this.httpClient.get<CartItems>(cartUrl).pipe(
      map((data: CartItems) => {
        //  console.log(CartItems);
        return data;
      }),
      catchError((error) => {
        return throwError('something went wrong');
      })
    );
  }
}
