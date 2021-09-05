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
  public subscription: Subscription;

  constructor(private suscriptoresService: SuscriptoresService) { }

  ngOnInit() {
    this.subscription = this.suscriptoresService.suscriptoresObservable$.subscribe((suscriptores: Array<{}>)=>{
      this.suscriptores = suscriptores;
    }
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
