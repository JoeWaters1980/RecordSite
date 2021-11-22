import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   @Input()
   cartItems: any
  cartTotal=0
  constructor() { }

  ngOnInit() {
    // this.cartTotal.forEach(item => {
    //   this.cartTotal +=(item.qty * item.price)
    // });
  }

}
