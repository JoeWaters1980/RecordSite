import { Component, Input, OnInit } from '@angular/core';
import { cartItems } from 'src/interface/cart';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
 
  @Input() cartItem:any;
  
  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }
  removeFromCart(){
      this.msg.removeProductMessage(this.cartItem);
  }
}
