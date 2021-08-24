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
  array1$: BehaviorSubject<any>;
  array2$: BehaviorSubject<any>;
  array3$: BehaviorSubject<any>;
 
  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.codeFilter$= new BehaviorSubject(null);
    this.array1$= new BehaviorSubject(null);
    this.array2$= new BehaviorSubject(null);
    this.array3$= new BehaviorSubject(null);
    this.items$ = combineLatest<Observable<string | null>[]>(
      this.sizeFilter$,
      this.colorFilter$,
      this.codeFilter$,
    ).pipe(
      switchMap(([size, color, code]) =>
        afs.collection<Item>('items', ref=>{
          let query: firebase.default.firestore.Query = ref;
          if (size) {query = query.where('size', '==', size)};
          if (color) {query = query.where('color', '==', color)};
          if (code){query = query.where('code','<=' ,code)};
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
  array1(){
    switchMap(([code]) =>
    afs.collection<Item>('items', (ref: firebase.default.firestore.Query<firebase.default.firestore.DocumentData>) =>{
      let query: firebase.default.firestore.Query = ref;
      if (code){query = query.where('code', '==', code)};
      return query;
    })
    )
}
  array2(){

  }
  array3(){

  }

}
