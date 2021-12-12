import { Component, OnInit } from '@angular/core';
import{LoginUrl} from 'src/app/Api/api'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Login';
  // socialUser:SocialUser;
  constructor() { }
  tokenId="blank";
  ngOnInit() {
    // const params= new URLSearchParams(window.location.search)
    // params.has(this.idToken);
    // console.log(params.get(this.idToken))
//     var access_token = new URLSearchParams(window.location.hash).get('access_token')
//   //  this.tokenId= access_token;
//     console.log(access_token)
//     return access_token
// // for (const param of params) {
}
  SignUp(){
    
  }
}
