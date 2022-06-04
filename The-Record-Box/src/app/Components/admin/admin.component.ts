import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/model/products';
import { ProductService } from 'src/services/product.service';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @Input()
  newItem:any=FormGroup;

  listProducts: Product[] = [];
  ProductService: any;
  addProduct!:Product;
 
  // constructor(private productService: ProductService) { }
  constructor(public http: HttpClient, private services: ProductService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.getProducts();
     console.log(this.ProductService.getProducts().subscribe)
    this.addAProduct();
  }

  getProducts() {
    this.services.getProducts().subscribe((data: any) => {
      console.log(data);
      this.listProducts = Object.values(data.Items);
       console.log(this.listProducts);
    });
  }
  addNewProduct(){
    this.services.addNewProduct(this.addProduct).subscribe(()=>
    {
      console.log(this.addProduct);
    });
  }
  addAProduct(){
    this.newItem=this.formBuilder.group({
      name:new FormControl("name"),
      productId:new FormControl("productId"),
      Image:new FormControl("Image"),
      price:new FormControl(0.00),
      description:new FormControl('description'),
      Quantity:new FormControl(0),
      category:new FormControl('category')
    })

  }

  onSubmit(_newItem:any){
    this.services.addNewProduct(this.newItem.value).subscribe(()=>
    {
      console.log(this.newItem.value);
    });
    // this.name=newItem.name
  

  }
}
