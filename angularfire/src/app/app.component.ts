import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

export interface Item {
  text: string;
  color: string;
  size: string;
  code: number;
  participants: Array<string>;
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
  participantFilter$: BehaviorSubject<any>;

  @ViewChild('participant') participant!: ElementRef;
  @ViewChild('code') code!: ElementRef;

  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.codeFilter$ = new BehaviorSubject(null);
    this.participantFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest<Observable<string | number | null>[]>(
      this.sizeFilter$,
      this.colorFilter$,
      this.codeFilter$,
      this.participantFilter$
    ).pipe(
      switchMap(([size, color, code, participant, title]) =>
        afs.collection<Item>('items', ref => {
          let query: firebase.default.firestore.Query = ref;
          if (size) { query = query.where('size', '==', size) };
          if (color) { query = query.where('color', '==', color) };
          console.log("code", code)
          if (code) { query = query.limit(5) };
          console.log("participant", participant)
          if (participant) {
            query = query.where('participants', 'array-contains', participant);
          };
          return query;
        }).valueChanges()
      )
    );
  }
  filterBySize(size: string | null) {
    this.sizeFilter$.next(size);
  }
  filterByColor(color: string | null) {
    this.colorFilter$.next(color);
  }
  filterByCode(code?: number | null) {
    if ( code = 0, code <=250){
        this.codeFilter$.next(code);
      } else{
        this.codeFilter$.next(code);
      } 
    }

  findParticipant(value?: string | null): void {
    if (value === undefined) {
      value = this.participant.nativeElement.value;
    } else {
      this.participant.nativeElement.value = '';
    }
    this.participantFilter$.next(value);
  }

}