import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ítems: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.ítems=firestore.collection('ítems').valueChanges();
  }
}
