import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import  jwt_decode  from 'jwt-decode';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userName = null;
  constructor() { }

  ngOnInit(): void {
    var access_token = new URLSearchParams(window.location.hash.replace('#','?')).get('access_token')
    console.log(access_token)
    localStorage.setItem('key', access_token?? '');
    
    var decode:any = jwt_decode(access_token?? '');
    console.log(decode);
    this.userName=decode.username;
    }
  }
