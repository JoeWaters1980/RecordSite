import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  removeSubject = new Subject()
  moveSubject = new Subject()
  checkSubject= new Subject()
  logInSubject = new Subject()
  

  constructor() { }

  sendMessage(products: any){

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

  getcheckOut(){
  return this.moveSubject.asObservable()
  }

  MoveToCheckOut(products :any) {
   this.moveSubject.next(products) 
  }

  CheckIfLogin(){
    return this.logInSubject.asObservable()
  }
  logInMessage(loginState:any){
    this.moveSubject.next(loginState) 
  }
}
