import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItems } from 'src/model/cart';
import { ProductService } from 'src/services/product.service';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';
import { LoginUrl } from 'src/app/Api/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() cartedItems:any;
  title = "checkout";
  loggedIN = false;
  cartTotal = 0;
  cartItems: CartItems[] = [];
  array=[];
  url =LoginUrl;
  
  
  constructor(private http: HttpClient, private productService: ProductService,private msg: MessengerService) { }

  ngOnInit(): void {
     this.msg.checkOut().subscribe((checkOutItems:any)=>{
       this.array=checkOutItems;
       console.log(checkOutItems.length);


       this.cartedItems= checkOutItems.vaule;
     })
  }
  goToLogin(){
    window.open(this.url)
  }

  processOrder(product:CartItems):Observable<any>{
    return this.http.post(cartUrl,{product})
  }
  clearCartItems(){}
  // loadCartItems() {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.productList = products;
  //   })
  }

