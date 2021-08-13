import { Component, OnInit } from '@angular/core';
import {accessoriesProducts} from '../../../data/accessories';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  title='Accessories';
  items: Observable<any[]>;
  // public allAccessories=accessoriesProducts;
  constructor(public db:AngularFireDatabase){
    this.items=db.list('items').valueChanges(); }

  ngOnInit(): void {
  }

}
