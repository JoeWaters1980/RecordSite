import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { purchaseId: 1, qty:2, name:'name', productId:'1a', price:25 },
    { purchaseId: 1, qty:1,name:'name', productId:'11a', price:25 },
    { purchaseId: 1, qty:1,name:'name', productId:'5a', price:25 },
    { purchaseId: 1, qty:1,name:'name', productId:'9a', price:25 }
   ];

   cartTotal =0;
  constructor() { }

  ngOnInit() {
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.price * item.qty)
    })
  }

}
