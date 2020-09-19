import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private db:AngularFireDatabase) { }

  getTechnologies(){
    return this.db.list('/technologies').snapshotChanges();
  }
}
