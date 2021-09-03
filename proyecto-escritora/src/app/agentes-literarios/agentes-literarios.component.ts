import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface Agente {
    nombre: string;
    telefono: number;
    email: string;
}

@Component({
    selector: 'app-agentes-literarios',
    templateUrl: './agentes-literarios.component.html',
    styleUrls: ['./agentes-literarios.component.scss']
})
export class AgentesLiterariosComponent implements OnInit {
    agentes: Agente[] | undefined;

    constructor(
        private _router: Router,
        private _ngZone: NgZone
    ) {
        this.agentes = [
            {
                nombre: 'Selena Gomez',
                telefono: 658956251,
                email: 'sgomez@correo.com'
            },
            {
                nombre: 'Justin Timberlake',
                telefono: 652148578,
                email: 'jtimbarlake@correo.com'
            },
            {
                nombre: 'Brad Pitt',
                telefono: 6539854712,
                email: 'bpitt@correo.com'
            },
            {
                nombre: 'Dross Rotzank',
                telefono: 62358452,
                email: 'drotzank@correo.com'
            }
        ]
    }

    ngOnInit(): void {
    }

    navigate(route: string[]) {
        this._ngZone.run(() => {
            this._router.navigate(route);
        });
    }

}
