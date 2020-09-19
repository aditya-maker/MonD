import { TrainingService } from './../training.service';
import { UserService } from './../user.service';
import {  take  } from 'rxjs/operators';
import { mergeMap, map, flatMap } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Subscription, Observable } from 'rxjs';

import { ProposalsService } from './../proposals.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-myproposals',
  templateUrl: './myproposals.component.html',
  styleUrls: ['./myproposals.component.css']
})
export class MyproposalsComponent implements OnInit,OnDestroy {
  users:any[];
  
  currMentor:firebase.User;
  subscription:Subscription;


  constructor(private proposalService:ProposalsService,private auth:AuthService,private userService:UserService,private trainingService:TrainingService) {
    this.subscription=this.auth.user$.pipe(take(1)).subscribe(mentor=>{
      this.currMentor=mentor;
      this.proposalService.getProposal(mentor.uid).subscribe(users=>{
        this.users=users;
        this.users.forEach(user=>{
        
          this.userService.get(user.key).subscribe(resp=>{
            user.name=resp.name;
            user.email=resp.email;
            user.prop=Object.keys(user.payload.val());

          })
        })
      })
    })
  }

  acceptProposal(userKey,tech){
    this.proposalService.deleteProposal(userKey,tech,this.currMentor.uid);
    this.trainingService.createNewTraining(userKey,tech,this.currMentor.uid);

  }
 


  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
