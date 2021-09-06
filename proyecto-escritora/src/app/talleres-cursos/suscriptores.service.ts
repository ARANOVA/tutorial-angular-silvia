import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export interface Suscriptores{
  id: number;
  nombre: string;
  taller: Selection;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuscriptoresService {
  suscriptor: Suscriptores[] | undefined;
  private suscriptores = new Array<{id: number; nombre: string; taller: Selection; email: string}>();
  private suscriptoresSubject = new Subject<Array<{id: number; nombre: string; taller: Selection; email: string}>>();
  public suscriptoresObservable$ = this.suscriptoresSubject.asObservable();

  constructor() { }

  crearsuscriptor(){
    this.suscriptores.push({id: 0, nombre:'', taller: Selection, email:'' + this.suscriptores.length});
    this.suscriptoresSubject.next(this.suscriptores);
  }

  eliminarsuscriptor(suscriptor: Array<Suscriptores>){
    this.suscriptores.splice(suscriptor);
    this.suscriptoresSubject.next(this.suscriptores);
  }

}
