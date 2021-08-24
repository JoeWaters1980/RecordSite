import { Component, OnInit } from '@angular/core';
import { Products } from 'src/interface/Products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers:[ProductApiServiceService]
})
export class ProductListComponent  {
  title='Products';
  products: any;

constructor(){}
  // private productService: FirebaseService){}
ngOnInit(){}

// }
//   getAllProducts(){
//     this.productService.getProductList().subscribe((res =>{
//       this.products=res;
//     }))
  }


  // ngOnInit(){
  //   this._productAPIService.getProductsData().subscribe((productsData: any) =>
  //     {this.productsData = productsData});
  // }
  // addProduct(name:string, cateogory:string,discription:string,price:number):boolean{
  //   let tempProduct:Products;
  //   tempProduct= new Products(name,cateogory,discription,price);
  //   this._productAPIService.addProductsData(tempProduct);
  //   return false;
  // }





