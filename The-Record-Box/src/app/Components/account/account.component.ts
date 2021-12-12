import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var access_token = new URLSearchParams(window.location.hash.replace('#','?')).get('access_token')
    console.log(access_token)
    localStorage.setItem('key', access_token?? '');
    }
  }
