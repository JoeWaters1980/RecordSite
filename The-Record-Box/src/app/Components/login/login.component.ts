import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='Login';
  constructor(private authService:SocialAuthService) { }

  ngOnInit(): void {

  }

  signInGoggle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  SignUp(){
    
  }
}
