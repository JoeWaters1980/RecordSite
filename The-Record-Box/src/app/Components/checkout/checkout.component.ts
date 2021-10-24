import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = "checkout";
  constructor() { }

  ngOnInit(): void {
  }

}
