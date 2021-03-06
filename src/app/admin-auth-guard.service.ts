
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth:AuthService, private userService:UserService) { }

  canActivate():Observable<boolean>{

     return this.auth.appUser$.pipe(
      map(appUser=> appUser.role=='A' ?  true :  false)
     );
  }

 
}
 