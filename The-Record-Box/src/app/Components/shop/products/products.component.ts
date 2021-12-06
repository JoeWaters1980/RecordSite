import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

listProducts:Product[] = []

  // constructor(private productService: ProductService) { }
  constructor(public http:HttpClient, private services:ProductService) { }

  ngOnInit() {


    this.getProducts();
    // console.log(this.productService.getProducts().subscribe)
    
    }
   
    getProducts(){
      this.services.getProducts().subscribe((data:any) =>{
        // console.log(data);
        this.listProducts= Object.values(data.Items);
        console.log(this.listProducts);
      });

  
}
}
