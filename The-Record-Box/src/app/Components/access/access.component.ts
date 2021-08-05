import { Component, OnInit } from '@angular/core';
import {accessoriesProducts} from '../../../data/accessories';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  title='Accessories';
  public allAccessories=accessoriesProducts;
  constructor() { }

  ngOnInit(): void {
  }

}
