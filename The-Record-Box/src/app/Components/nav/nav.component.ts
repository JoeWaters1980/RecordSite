import { Component, OnInit } from '@angular/core';
import{LoginUrl} from 'src/app/Api/api'

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
  url=LoginUrl;
  constructor() { }

  ngOnInit(): void {

  }
  logIn(){
    window.open(this.url)
  }
}
