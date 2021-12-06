import { Component, OnInit } from '@angular/core';

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
  url="https://the-record-box.auth.eu-west-1.amazoncognito.com/login?client_id=7u7om8dajnpknpujta0phif86&response_type=code&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:4200"
  constructor() { }

  ngOnInit(): void {

  }
  logIn(){
    window.open(this.url)
  }
}
