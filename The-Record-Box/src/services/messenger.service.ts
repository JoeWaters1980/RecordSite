import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/model/products';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  removeSubject = new Subject()
  moveSubject = new Subject()

  constructor() { }

  sendMessage(products: any){
  //   // console.log(product)
  //   //for triggering an event which accepts a product.
    this.subject.next(products)
  }
  removeProductMessage(product: any){
  this.removeSubject.next(product)
  }

  getMessage(){
    return this.subject.asObservable()
  }

  removedMessage(){
    return this.removeSubject.asObservable()
  }

  checkOut(){
  return this.moveSubject.asObservable()
  }

  MoveToCheckOut(products :any) {
   this.moveSubject.next(products) 
  }
}
