import { Component, OnInit } from '@angular/core';
import { cartUrl } from 'src/app/Api/api';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { cartItems, ICart } from '../../../interface/cart';
import { throwError } from 'rxjs';
import { Product } from 'src/model/products';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {
  orderedItems: ICart[] = [];
  cartTotal = 0;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.getOrders();
  }
  getOrders(){
    return this.httpClient.get<cartItems>(cartUrl).pipe(
      map((data:cartItems)=>{
      return data;
    }), catchError( error => {
      return throwError('something went wrong');
    })
    )
  }

}
