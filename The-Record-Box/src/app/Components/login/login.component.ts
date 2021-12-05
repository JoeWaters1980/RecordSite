import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider,SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Login';
  // socialUser:SocialUser;
  constructor(private authService:SocialAuthService) { }

  ngOnInit() {

  }

  
  signInGoggle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  SignUp(){
    
  }
}
