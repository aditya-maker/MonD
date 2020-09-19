import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) {
   }
   
   save(user:firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email,
      role:"U"
    }).then(resp=>console.log("Success",resp));
  }




   saveUser(user:firebase.User,username){
     this.db.object('/users/'+ user.uid).update({
       name: username,
       email: user.email,
       role:"U"
     }).then(resp=>console.log("Success",resp));
   }

   get(uid:string):Observable<AppUser>{

    return this.db.object<AppUser>('/users/'+ uid).valueChanges();

   }
}
