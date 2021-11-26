import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cartItems } from 'src/interface/cart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  // subject = new Subject()

  // constructor() { }

  // sendMessage(Item){
  //   //for triggering an event which accepts a product.
  //   this.subject.next(cartItems)
  // }

  // getMessage(){
  //   return this.subject.asObservable()
  // }
}
