import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Suscriptor {
    id: number;
    nombre: string;
    taller: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class SuscriptoresService {

    private __suscriptores: Suscriptor[] = [];
    private __suscriptoresSubject = new BehaviorSubject<Suscriptor[]>(this.__suscriptores);
    public suscriptoresObservable$ = this.__suscriptoresSubject.asObservable();

    constructor() { }

    crearsuscriptor(suscriptor: Suscriptor) {
        this.__suscriptores.push(suscriptor);
        this.__suscriptoresSubject.next(this.__suscriptores);
    }

    eliminarsuscriptor(id: number) {
        const found = this.__suscriptores.findIndex((suscriptor) => id === suscriptor.id);
        if (found > -1) {
            this.__suscriptores.splice(found, 1);

            this.__suscriptoresSubject.next(this.__suscriptores);
        }
    }

}
