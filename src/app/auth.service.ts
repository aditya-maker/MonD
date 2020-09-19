import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute,private router:Router, private userService:UserService) { 
    this.user$=afAuth.authState;
  }
  createUserEmailPassword(email,password){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(f?){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem(returnUrl,'returnUrl');

    if(f===undefined){
       this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); 
      }
    else{
       this.afAuth.signInWithEmailAndPassword(f.email,f.password).then(result=>this.router.navigateByUrl(returnUrl));
      }

  }
  
  logout(){
     this.afAuth.signOut();

  }
  get appUser$(){
    return this.user$.pipe(
      switchMap(user=>{
        if(user) return this.userService.get(user.uid);
        
        return of(null);
      }));
  }
  
}
