import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { cartUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';
import { map, catchError } from 'rxjs/operators';
import { cartItems } from 'src/interface/cart';
import { Products } from '../../../interface/Products';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  email = null;
  constructor(private msg: MessengerService, httpClient: HttpClient) {}

  ngOnInit(): void {
    var access_token = new URLSearchParams(
      window.location.hash.replace('#', '?')
    ).get('id_token');
    var firstLogin = localStorage.getItem('key') === null;
    localStorage.setItem('key', access_token ?? '');

    var decode: any = jwt_decode(access_token ?? '');
    console.log(decode);
    this.email = decode.email;
    if (access_token != undefined && firstLogin) {
      this.msg.logInMessage(true);
      window.location.reload();
    }
  }
  // getOrders() {
  //   return this.httpClient.get<cartItems>(cartUrl).pipe(
  //     map((data: cartItems) => {
  //       return data;
  //     }),
  //     catchError((error) => {
  //       return throwError('something went wrong');
  //     })
  //   );
  // }
}
