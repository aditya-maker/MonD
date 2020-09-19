import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private auth:AuthService, private userService:UserService, private router:Router) { }

  canActivate():Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser=>{ if(!appUser||((appUser)&&appUser.role=='U')) return true
    else{
      this.router.navigateByUrl("/home");
      return false;
    }
    })
    );
  }
}
