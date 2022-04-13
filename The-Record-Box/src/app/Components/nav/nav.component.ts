import { Component, OnInit } from '@angular/core';
import{LoginUrl} from 'src/app/Api/api'

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
  admin ='Admin';
  logOutText="Log Out";
  isAdmin = false;
  url=LoginUrl;
  isLoggedIn = false;
  idToken='account#id_token=';
  constructor() { }

  ngOnInit(): void {
    var loginkey = localStorage.getItem('key');
    
    this.isLoggedIn=(loginkey!==null);
 console.log("are we logged in" + this.isLoggedIn);

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

  logOut(){}
}
