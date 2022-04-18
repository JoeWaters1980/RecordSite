import { Component, OnInit } from '@angular/core';
import{LoginUrl, logOutUrl} from 'src/app/Api/api';
import { MessengerService } from 'src/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home='Home';
  shop='Shop';
  login='Login';
  checkout='Cart';
  account='Account';
  admin ='Admin';
  logOutText="Log Out";
  logOutUrl=logOutUrl;
  isAdmin = false;
  url=LoginUrl;
  isLoggedIn = false;
  idToken='account#id_token=';
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    var loginkey = localStorage.getItem('key');
    
    this.isLoggedIn=(loginkey!==null);
 console.log("are we logged in" + this.isLoggedIn);
 this.msg.CheckIfLogin().subscribe((loginState:any) => {
   this.isLoggedIn= loginState;
 });

  }
  logIn(){
    window.open(this.url,"_self")
    var access_token = new URLSearchParams(window.location.hash).get('access_token')
    // console.log(access_token)
    // console.log("are we working")
    return access_token;
  }

  adminAccess(){
    // this.isAdmin=false;
  }

  logOut(){
    localStorage.clear();
    window.open(this.logOutUrl,"_self")
    var access_token = new URLSearchParams(window.location.hash).get('access_token')
    // console.log(access_token)
    // console.log("are we working")
    return access_token;
  }
}
