import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import  jwt_decode  from 'jwt-decode';
import { MessengerService } from 'src/services/messenger.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = null;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    var access_token = new URLSearchParams(window.location.hash.replace('#','?')).get('id_token')
   var firstLogin =localStorage.getItem('key')===null;
    localStorage.setItem('key', access_token?? '');
    
    var decode:any = jwt_decode(access_token?? '');
    console.log(decode);
    this.email=decode.email;
    if (access_token!= undefined && firstLogin){
      this.msg.logInMessage(true);
      window.location.reload();

    }
    
  }

  
}
  
