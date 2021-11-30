import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products';
import { MessengerService } from 'src/services/messenger.service';

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
  constructor(private msg:MessengerService) { }

  ngOnInit() {
this.msg.getMessage().subscribe (product =>{
   console.log(product)

//  this.cartItems.push({
//    product.name,
 })


// this.cartTotal=0
  // this.cartItems.forEach(item =>{
  //   this.cartTotal += 
  // })



  }

}
