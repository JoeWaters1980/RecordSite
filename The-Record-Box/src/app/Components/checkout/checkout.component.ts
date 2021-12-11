import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItems } from 'src/model/cart';
import { HttpClient } from '@angular/common/http';
import { MessengerService } from 'src/services/messenger.service';
import { LoginUrl,cartUrl } from 'src/app/Api/api';
import { Product } from 'src/model/products';
import { Router } from '@angular/router';
import { cartItems } from 'src/interface/cart';

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

  constructor(private http: HttpClient, private msg: MessengerService, private _router :Router) {
    //  console.log(this.cartUrl);
    
  }

  ngOnInit(){
   this.cartItems=window.history.state.data.map((product:Product)  => 
         {
          return {productDescription:product.description,productCategory:product.category,productName:product.name,productPrice:product.price,qty:product.qty,cartId:'1',productId:product.Id, productImage:product.Image}

        });
        this.cartItems.forEach(cartItem => {
          this.cartTotal += (cartItem.productPrice * cartItem.qty)
        });

  }
  goToLogin() {
    window.open(this.url,"_self")
    
  }
  // SignInCallback(authResults){
  //   if (authResults['status']['signed_in']{
  //     AWS.config.credentials=new AWS.CognitoIdentityCredentials({
  //       IdentityPoolId: '',
  //       Logins: {
  //         'accounts.google.com':authResults['id_token']
  //       }
  //     });
  //     AWS.config.credentials.get(function(){})
  //   });
  // }
 
  // getProducts(){
  //   this.services.getProducts().subscribe((data:any) =>{
  //     // console.log(data);
  //     this.listProducts= Object.values(data.Items);
  //     //  console.log(this.listProducts);
  //   });
  processOrder() {
    console.log(cartUrl)
    // return this.http.post(cartUrl, { cartItems });
    return this.http.get(cartUrl);
    
  }
  clearCartItems() {}
}
