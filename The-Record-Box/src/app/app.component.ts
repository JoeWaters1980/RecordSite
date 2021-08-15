import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {HttpClient,HttpErrorResponse} from'@angular/common/http';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { ProductApiServiceService } from 'src/services/product-api-service.service';
import { Products} from 'src/interface/Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'The-Record-Box';

itemValue='';
 @Input()
// items: Observable<any[]>;

// constructor(public db:AngularFireDatabase){
//   this.items=db.list('item').valueChanges();
// }

  // items: Observable<any[]>;
  // constructor(public db:AngularFireDatabase){
  //   this.items=db.list('item').valueChanges();
  // }
  productsData!: Products[];

  constructor(private _productAPIService:ProductApiServiceService){}
  // // public allAccessories=accessoriesProducts;
  // constructor(public db:AngularFireDatabase){
  //   this.items=db.list('items').valueChanges(); }

  ngOnInit(){
    // this._productAPIService.getProductsData().subscribe(productsData =>
    //   {this.productsData = productsData});
  }
  // addProduct(name:string, cateogory:string,discription:string,price:number):boolean{
  //   let tempProduct:Products;
  //   tempProduct= new Product(name,cateogory,discription,price);
  //   this._productAPIService.addProductsData(tempProduct);
  //   return false;
  // }

}

