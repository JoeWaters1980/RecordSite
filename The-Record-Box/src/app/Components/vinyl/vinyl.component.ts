import { Component, OnInit } from '@angular/core';
import {vinylProducts} from '../../../data/vinylProducts';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css']
})
export class VinylComponent implements OnInit {
 title='vinyl';

 public allVinylProducts = vinylProducts;
  constructor() { }

  ngOnInit(): void {
   
  }

}

