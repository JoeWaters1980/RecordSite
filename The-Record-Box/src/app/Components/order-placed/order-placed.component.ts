import { Component, Input, OnInit } from '@angular/core';
import { cartUrl } from 'src/app/Api/api';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { cartItems, ICart } from '../../../interface/cart';
import { throwError } from 'rxjs';
import { MessengerService } from 'src/services/messenger.service';
import { Product } from 'src/model/products';
import { CartItems } from 'src/model/cart';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  cartItem: any;
  orderedItems: cartItems[] = [];
  cartTotal = 0;
  userAddress: any;

  constructor(private httpClient: HttpClient, private msg: MessengerService) {}
  ngOnInit() {
    this.cartItem = this.getOrders();
    console.log(this.cartItem);
    var addAddress = {
      addressLine1: '1 House',
      addressLine2: 'The Road',
      city: 'Dublin',
      postcode: 'DB125FC',
      country: 'Ireland',
    };
    this.userAddress = addAddress;
  }
  getOrders() {
    return this.httpClient.get<cartItems>(cartUrl).pipe(
      map((data: cartItems) => {
        console.log(data);
        return data;
      }),
      catchError((error) => {
        return throwError('something went wrong');
      })
    );
  }
}
