import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private db:AngularFireDatabase) { }

  createNewTraining(userKey,tech,mentorKey){
    this.db.object('/trainings'+'/mentorTrainings/' + mentorKey + '/' + userKey + '/' +  tech ).update( {progress:50})
    this.db.object('/trainings'+'/userTrainings/' + userKey + '/' +  mentorKey + '/' + tech ).update( {progress:50})

  }
  getUserTrainings(userKey){
    return this.db.list('/trainings' + '/userTrainings/' + userKey ).snapshotChanges();
  }

}
