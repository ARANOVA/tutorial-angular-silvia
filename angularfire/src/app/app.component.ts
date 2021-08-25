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
  codeMinFilter$: BehaviorSubject<any>;
  codeMaxFilter$: BehaviorSubject<any>;
  participantFilter$: BehaviorSubject<any>;
  titleFilter$: BehaviorSubject<any>;

  @ViewChild('participant') participant!: ElementRef;
  @ViewChild('codeMin') codeMin!: ElementRef;
  @ViewChild('codeMax') codeMax!: ElementRef;

  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.codeMinFilter$ = new BehaviorSubject(null);
    this.codeMaxFilter$ = new BehaviorSubject(null);
    this.participantFilter$ = new BehaviorSubject(null);
    this.titleFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest<Observable<string | number | null>[]>(
      this.sizeFilter$,
      this.colorFilter$,
      this.codeMinFilter$,
      this.codeMaxFilter$,
      this.participantFilter$,
      this.titleFilter$
    ).pipe(
      switchMap(([size, color, codeMin, codeMax, participant, title]) => {
        console.log(size, color, codeMin, codeMax, participant, title);
        return afs.collection<Item>('items', ref => {
          let query: firebase.default.firestore.Query = ref;
          if (size) { query = query.where('size', '==', size) };
          if (color) { query = query.where('color', '==', color) };
          if (codeMin) {
            query = query.where('code', '>=', parseInt(codeMin as unknown as string));
          }
          if (codeMax) {
            query = query.where('code', '<=', parseInt(codeMax as unknown as string));
          }
          if (participant) {
            query = query.where('participants', 'array-contains', participant);
          };
          return query;
        }).valueChanges()
        }
      )
    );
  }
  filterBySize(size: string | null) {
    this.sizeFilter$.next(size);
  }
  filterByColor(color: string | null) {
    this.colorFilter$.next(color);
  }
  filterByCode(codeMin?: number | null, codeMax?: number | null) {
    if (codeMin === undefined) {
      codeMin = this.codeMin.nativeElement.value;
    } else {
      this.codeMin.nativeElement.value = '';
    }

    if (codeMax === undefined) {
      codeMax = this.codeMax.nativeElement.value;
    } else {
      this.codeMax.nativeElement.value = '';
    }
    this.codeMinFilter$.next(codeMin);
    this.codeMaxFilter$.next(codeMax);
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