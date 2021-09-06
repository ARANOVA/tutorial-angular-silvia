import { Component, OnInit, OnDestroy } from '@angular/core';
import { Taller } from 'src/app/interfaces/talleres.interface';
import { Subscription } from 'rxjs';
import { Suscriptor, SuscriptoresService } from '../../services/suscriptores.service';


@Component({
    selector: 'app-suscriptores',
    templateUrl: './suscriptores.component.html',
    styleUrls: ['./suscriptores.component.scss']
})
export class SuscriptoresComponent implements OnDestroy {
    talleres: Taller[] | undefined;
    private __subscription: Subscription;
    suscriptores: Suscriptor[] | undefined;

    public suscriptor: Suscriptor = {
        id: 0,
        nombre: '',
        taller: '',
        email:''
    }

    constructor(private __suscriptoresService: SuscriptoresService) {
        this.__subscription = this.__suscriptoresService.suscriptoresObservable$.subscribe((suscriptores: Suscriptor[]) => {
            this.suscriptores = suscriptores;
        });
    }


    ngOnDestroy() {
        if (this.__subscription) {
            this.__subscription.unsubscribe();
        }
    }

    crearsuscriptor() {
        this.__suscriptoresService.crearsuscriptor(this.suscriptor);
        this.suscriptor = {id: 0, nombre:'' , taller: '', email: ''};
    }

    eliminarsuscriptor(id: number) {
        this.__suscriptoresService.eliminarsuscriptor(id);
    }

}
