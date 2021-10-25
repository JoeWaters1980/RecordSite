import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../../../interface/Products';
import { ServicesService } from 'src/services/services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input()
  products: Products[] = [];
  title = 'Shop';
  constructor(public http: HttpClient, private services: ServicesService) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.services.getProducts().then((res) => {
      this.products = res.Items;
    });
  }
}
