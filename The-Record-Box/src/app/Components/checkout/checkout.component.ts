import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = "checkout";
  loggedIN = false;
  cartTotal = 0;
  cartItems: Product[] = [];
  url ="https://the-record-box.auth.eu-west-1.amazoncognito.com/login?client_id=7u7om8dajnpknpujta0phif86&response_type=code&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:4200";
  constructor() { }

  ngOnInit(): void {
  }
  goToLogin(){
    window.open(this.url)
  }
  processOrder(){}
  clearCartItems(){}
}
