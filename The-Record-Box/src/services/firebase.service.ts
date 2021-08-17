import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

// firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularFirebase:AngularFirestore) {}

  createProduct(data:any){
    return new Promise<any>((resolve, reject)=>{
      this.angularFirebase.collection("Products").add(data). then((res)=>{}
      ,(err)=>reject(err));

    });
  }
  getProductList(){
   return this.angularFirebase.collection('Products').snapshotChanges();
  }
}
  
  
