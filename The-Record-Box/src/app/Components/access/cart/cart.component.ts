import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { cartItems } from 'src/interface/cart';
import { ServicesService } from 'src/services/services.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   @Input()
   cartItem: any
  cartTotal=0
  constructor(public http: HttpClient, private services: ServicesService) {}
  ngOnInit() {
    // this.getItemsInCart();
    // this.cartTotal();
  }
  // getItemsInCart() {
  //   // this.services.getItemsInCart().then((res) => {
  //   //   this.cartItem = res.Items;
  //   });
  // }
  // getCartTotal(){
  //   // this.cartItem.forEach(items => {
  //     // this.cartTotal +=(items.qty* items.price)
  // }

}
