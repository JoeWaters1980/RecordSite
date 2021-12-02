import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/model/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

listProducts:Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.loadProducts();
    // console.log(this.productService.getProducts().subscribe)
    
    }
    loadProducts(){
      this.productService.getProducts().subscribe((products: any)=>{
        this.listProducts = products;
        console.log(this.listProducts);
    })
  }

}
