import { switchMap, take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {
  subscription:Subscription;

  constructor(private auth:AuthService,private db:AngularFireDatabase) { }

  sendProposal(mentorKey,tech,userKey){
      this.db.object('/mentorProposals/'+ mentorKey +'/'+ userKey + '/'+ tech).update({done:false});
      this.db.object('/userProposals/'+ userKey +'/'+ mentorKey + '/'+ tech).update({done:false});
  
  }

  getProposal(mentorUid){
    return this.db.list('/mentorProposals/'+ mentorUid).snapshotChanges();

  }
  deleteProposal(userKey,tech,mentorKey){
    this.db.object('/mentorProposals/'+ mentorKey +'/'+ userKey + '/'+ tech)
    .remove()
    .then(x=>console.log("Deleted"))
    .catch(err=>console.log(err));

    this.db.object('/userProposals/'+ userKey +'/'+ mentorKey + '/'+ tech)
    .remove()
    .then(x=>console.log("Deleted from UserProposals"))
    .catch(err=>console.log(err));

  }
}
