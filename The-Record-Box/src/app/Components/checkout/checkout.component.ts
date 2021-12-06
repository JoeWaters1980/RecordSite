import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItems } from 'src/model/cart';
import { ProductService } from 'src/services/product.service';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = "checkout";
  loggedIN = false;
  cartTotal = 0;
  cartItems: CartItems[] = [];
  productList: CartItems[]=[];
  url ="https://the-record-box.auth.eu-west-1.amazoncognito.com/login?client_id=7u7om8dajnpknpujta0phif86&response_type=code&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:4200";
  
  
  constructor(private http: HttpClient, private productService: ProductService,private msg: MessengerService) { }

  ngOnInit(): void {
     this.msg.checkOut().subscribe((checkOutItems:any)=>{
       console.log(checkOutItems.length);
     })
  }
  goToLogin(){
    window.open(this.url)
  }
  // loadProducts() {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.productList = products;
  //   })
  // }
  processOrder(product:CartItems):Observable<any>{
    return this.http.post(cartUrl,{product})
  }
  clearCartItems(){}

}
