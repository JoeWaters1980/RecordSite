import { Component, Input, OnInit } from '@angular/core';
import { CartItems } from 'src/model/cart';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-items-in-cart',
  templateUrl: './items-in-cart.component.html',
  styleUrls: ['./items-in-cart.component.css']
})
export class ItemsInCartComponent implements OnInit {

  @Input() itemsInCart!:CartItems;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

  }
  AddToCartHandle(){
    this.msg.sendMessage(this.itemsInCart);
  }
}
