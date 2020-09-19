
import { AuthService } from './../auth.service';

import { ProposalsService } from './../proposals.service';

import { MentorService } from './../mentor.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit, OnDestroy {
  

  mentors:any[];
  subscription:Subscription;


  constructor(private mentorService:MentorService,private proposalsService:ProposalsService,private auth:AuthService) {
    this.subscription=this.mentorService.getAll().
     subscribe(mentors=>this.mentors=mentors);
   
   }

  filter(query){}

  sendProposal(mentorUid, tech){
    this.auth.user$.pipe(take(1)).subscribe(user=>this.proposalsService.sendProposal(mentorUid,tech,user.uid));
  }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

  ngOnInit(): void {
  }

}
