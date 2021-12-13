import { Component, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CartItems } from 'src/model/cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessengerService } from 'src/services/messenger.service';
import { LoginUrl,cartUrl } from 'src/app/Api/api';
import { Product } from 'src/model/products';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  title = 'checkout';
  loggedIn = false;
  cartTotal = 0;
  url = LoginUrl;
  cartUrl=cartUrl;
  cartItems: CartItems[]=[];

  constructor(private http: HttpClient, private msg: MessengerService, private _router :Router, private checkout:CheckoutService) {
    //  console.log(this.cartUrl);
    
  }

  ngOnInit(){
   this.cartItems=window.history.state.data?.map((product:Product, index:number)  => 
         {
          return {productDescription:product.description,productCategory:product.category,productName:product.name,productPrice:product.price,qty:product.qty,cartId:index+1,productId:product.Id, productImage:product.Image}

        });
        this.cartItems?.forEach(cartItem => {
          this.cartTotal += (cartItem.productPrice * cartItem.qty)
        });
        if (this.cartItems===undefined){
          this.cartItems=[];
        }
  }
  goToLogin() {
    window.open(this.url,"_self")
    
  }
  
  processOrder() {
this.checkout.CheckOutItems(this.cartItems).subscribe(()=>
{
 
  console.log(this.cartItems)
});
  }

  clearCartItems() {}
}
