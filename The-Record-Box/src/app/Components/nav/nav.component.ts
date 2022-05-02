import { Component, OnInit } from '@angular/core';
import { LoginUrl, logOutUrl } from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  home = 'Home';
  shop = 'Shop';
  login = 'Login';
  checkout = 'Cart';
  account = 'Account';
  admin = 'Admin';
  logOutText = 'Log Out';
  logOutUrl = logOutUrl;
  isAdmin = false;
  url = LoginUrl;
  isLoggedIn = false;
  idToken = 'account#openid=';
  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    var loginkey = localStorage.getItem('key');
    var LoggedIn = sessionStorage.setItem('LoggedIn', JSON.stringify(loginkey));

    this.isLoggedIn = loginkey !== null;
    // console.log("are we logged in " + this.isLoggedIn);
    if (this.isLoggedIn === true) {
      sessionStorage.getItem('LoggedIn');
      this.adminAccess();
    }
    this.msg.CheckIfLogin().subscribe((loginState: any) => {
      this.isLoggedIn = loginState;
      sessionStorage.setItem('LoggedIn', 'true');
    });
  }
  logIn() {
    window.open(this.url, '_self');
    var access_token = new URLSearchParams(window.location.hash).get(
      'access_token'
    );
    return access_token;
  }

  adminAccess() {
    this.isAdmin = true;
    var access_token = localStorage.getItem('key');
    var decode: any = jwt_decode(access_token ?? '');
    // console.log("key "+ decode);
  }

  logOut() {
    localStorage.clear();
    window.open(this.logOutUrl, '_self');
    var access_token = new URLSearchParams(window.location.hash).get(
      'access_token'
    );
    // console.log(access_token)
    // console.log("are we working")
    return access_token;
  }
}
