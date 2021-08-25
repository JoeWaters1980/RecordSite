import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home='Home';
  signUp='sign Up';
  shop='Shop';
  login='Login';
  checkout='Cart';

  constructor() { }

  ngOnInit(): void {

  }

}
