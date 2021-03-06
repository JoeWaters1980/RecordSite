import { Component, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Products } from '../../../../interface/Products';
import { ServicesService } from 'src/services/services.service';
import { HttpClient } from '@angular/common/http';
import { MessengerService } from 'src/services/messenger.service';
import { dynamoURL } from 'src/app/Api/api';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input()
  products: Products[] = [];
  title = 'Shop';
  // constructor(public httpClient: HttpClient, private services: ServicesService) {}
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.getProducts();
  }
  // getProducts(){
  //   this.services.getProducts().subscribe((data:any) =>{
  //     console.log(data);
  //     this.products=data;
  //   });
  // }
  getProducts(){
    return this.httpClient.get<Products>(dynamoURL).pipe(
      map((data:Products)=>{
      return data;
    }), catchError( error => {
      return throwError('something went wrong');
    })
    )
  }
  
}

