import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private msg: MessengerService, private _router:Router) {}

  ngOnInit() {

   
    this.msg.getMessage().subscribe((product: any) => {
      // console.log(product);
       this.cartTotal += product.price;

      const existingItems= this.cartItems.filter((item)=>
      item.name===product.name);
      if (existingItems.length===0){
        product.qty=1;
        this.cartItems.push(product as Product);
      }
      else{
        existingItems[0].qty++;
      }    
    
    });

    this.msg.removedMessage().subscribe((product:any)=>{
      this.cartTotal -= product.price;

      const existingItems= this.cartItems.filter((item)=>
      item.name===product.name);
      if (existingItems.length>0 && existingItems[0].qty>1){
        existingItems[0].qty--;
      }
      else{
        this.cartItems= this.cartItems.filter((item)=>
        item.name!=product.name);
      }  
    }
    );
  }
  goToCheckOut(){
    this._router.navigateByUrl("/checkout",{state:{data:this.cartItems}}); 
   
  }

  clearCartItems(){}
}
