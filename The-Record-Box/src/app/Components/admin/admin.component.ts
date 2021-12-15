import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  listProducts: Product[] = [];
  ProductService: any;

  // constructor(private productService: ProductService) { }
  constructor(public http: HttpClient, private services: ProductService) {}

  ngOnInit() {
    this.getProducts();
    //  console.log(this.ProductService.getProducts().subscribe)
  }

  getProducts() {
    this.services.getProducts().subscribe((data: any) => {
      // console.log(data);
      this.listProducts = Object.values(data.Items);
      //  console.log(this.listProducts);
    });
  }
  addNewProduct(){}
}
