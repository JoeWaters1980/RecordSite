import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home='Home';
  vinyl='Vinyl';
  acce='Accessories';
  login='Login';
  checkout='Cart';

  constructor() { }

  ngOnInit(): void {

  }

}
