import { Component, Input, OnInit } from '@angular/core';
import { cartItems } from 'src/interface/cart';
import { CartItems } from 'src/model/cart';
import { Product } from 'src/model/products';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-items-in-cart',
  templateUrl: './items-in-cart.component.html',
  styleUrls: ['./items-in-cart.component.css']
})
export class ItemsInCartComponent implements OnInit {

  @Input() itemsInCart!:CartItems;
  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    console.log(this.itemsInCart.productPrice)
    this.cartTotal += (this.itemsInCart.productPrice* this.itemsInCart.qty);
  }
  AddToCartHandle(){
    this.msg.sendMessage(this.itemsInCart);
    
    // this.cartTotal += productPrice;

    
  }
}
