import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable , BehaviorSubject, combineLatest, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

export interface Item {
  text: string;
  color: string;
  size: string;
  code: number;
  array: Array<string>;
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
  codeFilter$: BehaviorSubject<any>;
  array$: BehaviorSubject<any>;
 
  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.codeFilter$= new BehaviorSubject(null);
    this.array$= new BehaviorSubject(null);
    this.items$ = combineLatest<Observable<string | null>[]>(
      this.sizeFilter$,
      this.colorFilter$,
      this.codeFilter$,
      this.array$
    ).pipe(
      switchMap(([size, color, code]) =>
        afs.collection<Item>('items', ref=>{
          let query: firebase.default.firestore.Query = ref;
          if (size) {query = query.where('size', '==', size)};
          if (color) {query = query.where('color', '==', color)};
          if (code){query = query.where('code','<=' ,code)};
          if (Array){query = query.where('array', 'array-contains', Array)};
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
  filterByCode (code: number | null){
    this.codeFilter$.next(code);
  }
  array (array: Array<string> | null){
    this.array$.next(Array);
  }
}
