import { Component, Input, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { CartItems } from 'src/model/cart';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';
import { LoginUrl } from 'src/app/Api/api';
import { Product } from 'src/model/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  title = 'checkout';
  loggedIN = false;
  cartTotal = 0;
  // cartItems: CartItems[] = [{productDescription:'discription',productCategory:'category',productName:'Name',productPrice:1,qty:1,cartId:'1',productId:'123'}];
  url = LoginUrl;
  cartItems: CartItems[]=[];

  constructor(private http: HttpClient, private msg: MessengerService) {
    // console.log(" constructor");
    
    
  }

  ngOnInit(){
   this.cartItems=window.history.state.data.map((product:Product)  => 
         {
          return {productDescription:product.description,productCategory:product.category,productName:product.name,productPrice:product.price,qty:product.qty,cartId:'1',productId:product.Id, productImage:product.Image}
        });
        console.log(this.cartItems)

    // this.msg.getcheckOut().subscribe((checkOutItems: any) => {
    //   console.log(checkOutItems.length);
    //     this.cartItems =
    //     checkOutItems.map((product:Product)  => 
    //      {
    //       return {productDescription:product.description,productCategory:product.category,productName:product.name,productPrice:product.price,qty:product.qty,cartId:'1',productId:product.Id}
    //     });
    //     console.log(this.cartItems+ " subscribe");
       
    // });
  }
  goToLogin() {
    window.open(this.url);
  }

  processOrder(product: CartItems): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
  clearCartItems() {}
}
// getProducts(){
//   this.services.getProducts().subscribe((data:any) =>{
//     // console.log(data);
//     this.listProducts= Object.values(data.Items);
//     // console.log(this.listProducts);
//   });
