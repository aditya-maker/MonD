import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afauth:AngularFireAuth, private router:Router, private userService:UserService){
    afauth.getRedirectResult().then(result=>{
      if(result.user){
        this.userService.save(result.user);
        let returnUrl=localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
        
      }
    });


  }
}
