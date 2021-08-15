import { Component, OnInit } from '@angular/core';
import { Products } from 'src/interface/Products';
import { ProductApiServiceService } from 'src/services/product-api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductApiServiceService]
})
export class ProductListComponent implements OnInit {
  _productAPIService: any;
  productsData: any;

  ngOnInit(){
    this._productAPIService.getProductsData().subscribe((productsData: any) =>
      {this.productsData = productsData});
  }
  addProduct(name:string, cateogory:string,discription:string,price:number):boolean{
    let tempProduct:Products;
    tempProduct= new Products(name,cateogory,discription,price);
    this._productAPIService.addProductsData(tempProduct);
    return false;
  }


}
