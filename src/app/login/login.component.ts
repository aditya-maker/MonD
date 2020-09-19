
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AuthService) { 
    
  }

  ngOnInit(): void {
  }

  login(f?) { (f===undefined)? this.afAuth.login() : this.afAuth.login(f); }
  

}
