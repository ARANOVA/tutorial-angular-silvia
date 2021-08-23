import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable , BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';

export interface Item {
  text: string;
  color: string;
  size: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items$: Observable<Item[]>;
  sizeFilter$: BehaviorSubject<any>;
  colorFilter$: BehaviorSubject<any>;

  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest<Observable<string | null>[]>(
      this.sizeFilter$,
      this.colorFilter$
    ).pipe(
      switchMap(([size, color]) =>
        afs.collection<Item>('items', ref=>{
          let query: firebase.default.firestore.Query = ref;
          if (size) {query = query.where('size', '==', size)};
          if (color) {query = query.where('color', '==', color)};
          return query;
        }).valueChanges()
      )
    );
  }
  filterBySize (size: string | null) {
    this.sizeFilter$.next(size);
  }
  filterByColor (color: string | null) {
    this.colorFilter$.next(color);
  }
}
