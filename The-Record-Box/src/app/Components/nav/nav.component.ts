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
  url=LoginUrl;
  idToken='account#id_token=';
  constructor() { }

  ngOnInit(): void {
    // const params= new URLSearchParams(window.location.search)
    // params.get(this.idToken);
    // console.log(params.get(this.idToken))
  }
  logIn(){
    window.open(this.url,"_self")
    var access_token = new URLSearchParams(window.location.hash).get('access_token')
    console.log(access_token)
  }
}
