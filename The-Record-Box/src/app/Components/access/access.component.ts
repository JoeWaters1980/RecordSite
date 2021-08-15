import { Component, Input, OnInit } from '@angular/core';
import {accessoriesProducts} from '../../../data/accessories';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Products} from '../../../interface/Products';
import { ProductApiServiceService } from 'src/services/product-api-service.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  providers:[ProductApiServiceService]
})
export class AccessComponent implements OnInit {
 
  @Input()
  productsData!: Products;
  title='Accessories';
 constructor() {}
 ngOnInit(){}
  
}



