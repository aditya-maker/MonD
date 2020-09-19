import { UserService } from './../user.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  
  appUser:AppUser;

  constructor(public auth:AuthService, private userService:UserService){
    auth.appUser$.subscribe(appUser=>this.appUser=appUser);
    
   }

  logout(){
    this.auth.logout();
    
  }

}
