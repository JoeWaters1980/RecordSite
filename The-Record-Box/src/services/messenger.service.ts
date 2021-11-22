import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Products } from 'src/interface/Products';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMessage(){
    //for triggering an event which accepts a product.
    this.subject.next()
  }

  getMessage(){
    return this.subject.asObservable()
  }
}
