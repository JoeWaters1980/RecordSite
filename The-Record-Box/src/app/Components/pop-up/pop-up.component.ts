import { Component, OnInit } from '@angular/core';
import{LoginUrl} from 'src/app/Api/api';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  url=LoginUrl;
  login='Login';

  constructor() { }

  ngOnInit(): void {

  }
  logIn(){
    window.open(this.url,"_self")
    var access_token = new URLSearchParams(window.location.hash).get('access_token')
    // console.log(access_token)
    // console.log("are we working")
    return access_token;
  }

}
