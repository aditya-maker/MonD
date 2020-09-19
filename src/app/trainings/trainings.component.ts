import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  trainings:any[]
  subscription:Subscription;
  constructor(private traningService:TrainingService,private auth:AuthService, private userService:UserService) {

    this.subscription=this.auth.user$.pipe(take(1)).subscribe(user=>{
      this.traningService.getUserTrainings(user.uid).subscribe(mentors=>{
        this.trainings=mentors;
        this.trainings.forEach(trainer=>{
          this.userService.get(trainer.key).subscribe(resp=>{
            trainer.name=resp.name;
            trainer.email=resp.email;
            trainer.excercises=Object.keys(trainer.payload.val());
            console.log(trainer.payload.val().Angular.progress);
          })
        })
      })
    });


   }
  

  ngOnInit(): void {
  }

}
