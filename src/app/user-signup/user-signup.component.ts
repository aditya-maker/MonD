import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private auth:AuthService, private userService:UserService) { }

  submit(user){
    this.auth.createUserEmailPassword(user.email,user.password).then(value => {
      this.userService.saveUser(value.user,user.name);

    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    })
  }

  ngOnInit(): void {
  }

}
