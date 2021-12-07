import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  cartItems: CartItems[] = [];
  url = LoginUrl;

  constructor(private http: HttpClient, private msg: MessengerService) {}

  ngOnInit(){
    this.msg.getcheckOut().subscribe((checkOutItems: any) => {
      console.log(checkOutItems.length);
        this.cartItems = checkOutItems;
        this.cartItems= Object.values(checkOutItems);
        console.log(this.cartItems);
    });
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
