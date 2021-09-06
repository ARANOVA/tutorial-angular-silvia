import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, Taller } from 'src/app/interfaces/talleres.interface';
import { Subscription } from 'rxjs';
import { SuscriptoresService } from '../suscriptores.service';

export interface Suscriptores{
  id: number;
  nombre: string;
  taller: Selection;
  email: string;
}

@Component({
  selector: 'app-suscriptores',
  templateUrl: './suscriptores.component.html',
  styleUrls: ['./suscriptores.component.scss']
})
export class SuscriptoresComponent implements OnInit, OnDestroy {
  talleres: Taller[] | undefined;
  dialog: Dialog[] | undefined;
  private _subscription: Subscription = new Subscription;
  suscriptoresSubject: any;
  suscriptor: Suscriptores[] | undefined;
  public get subscription(): Subscription {
    return this._subscription;
  }
  public set subscription(value: Subscription) {
    this._subscription = value;
  }

  constructor(private suscriptoresService: SuscriptoresService) { }

  ngOnInit() {
    this.subscription = this.suscriptoresService.suscriptoresObservable$.subscribe((suscriptores: Array<{}>)=>{
      this.suscriptor = suscriptores;
    }
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  crearsuscriptor(){
    this.suscriptor.push({id: 0, nombre:'', taller: Selection, email:'' + this.suscriptor.length});
    this.suscriptoresSubject.next(this.suscriptor);
  }

  eliminarsuscriptor(suscriptor: Array<Suscriptores>){
    this.suscriptor.splice(1);
    this.suscriptoresSubject.next(this.suscriptores);
  }

}
