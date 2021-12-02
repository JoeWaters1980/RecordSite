import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMessage(products: any){
  //   // console.log(product)
  //   //for triggering an event which accepts a product.
    this.subject.next(products)
  }

  getMessage(){
    return this.subject.asObservable()
  }
}
