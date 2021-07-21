import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaDBService {
  clases: Observable<any[]>;
  skills: Observable<any[]>;
  backgrounds: Observable<any[]>;

  constructor(firestore: AngularFirestore) {

    this.clases = firestore.collection("clases", ref => ref
    .orderBy("nombre", "asc"))
        .valueChanges();
    this.skills = firestore.collection("skills").valueChanges();
    this.backgrounds = firestore.collection("backgrounds").valueChanges();

    this.backgrounds.subscribe(resp => {
      console.log(resp)
    })
    
  }
}
