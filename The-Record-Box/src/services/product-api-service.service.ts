import { Injectable } from '@angular/core';
import { IProducts } from 'src/interface/Products';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductApiServiceService {
  constructor(){}
  ngOnInit(){}


  // productsDataCollection:AngularFirestoreCollection<IProducts>;
  // productData!: Observable<IProducts[]>;
  // allProducts: IProducts[] = [];
  // errorMessage!: string;
  
  // constructor(private _http:HttpClient, private _afs:AngularFirestore) {
  //   this.productsDataCollection=_afs.collection<IProducts>('products_data');
  //  }

  //  getProductsData():Observable<IProducts[]>{
  //    this.productData = this.productsDataCollection.valueChanges();
  //    this.productData.subscribe(data => console.log("getProducts:"+JSON.stringify(data)))
  //    return this.productData;
  //  }

  //  addProductsData(product:IProducts): void{
  //    this.productsDataCollection.add(JSON.parse(JSON.stringify(product)));
  //  }

  //  private handleError(catchError:HttpErrorResponse){
  //    console.log('products Api service: '+ catchError.message);
  //    return Observable.throw(catchError.message);
  //  }
}
