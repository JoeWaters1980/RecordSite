import { Component, OnInit } from '@angular/core';
import { Products } from 'src/interface/Products';
import { Product } from 'src/model/products';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  cartTotal = 0;
  constructor(private msg: MessengerService) {}

  ngOnInit() {

   
    this.msg.getMessage().subscribe((product) => {
      console.log(product);
      this.cartItems.push(product as Product);

      this.cartItems.forEach((item) => {
        this.cartTotal = item.price;
      });
    
    });

  
  }
  goToCheckOut(){
   
  }

  clearCartItems(){}
}
