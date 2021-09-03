import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface Tarifa{
  id: number;
  nombre:string;
  precio: number;
  info: string;
}

@Component({
  selector: 'app-tarifas-edicion',
  templateUrl: './tarifas-edicion.component.html',
  styleUrls: ['./tarifas-edicion.component.scss']
})
export class TarifasEdicionComponent implements OnInit {
  tarifas: Tarifa[] | undefined;

  constructor(
    private _router: Router,
    private _ngZone: NgZone
  ) { 
    this.tarifas = [
      {
        id:1,
        nombre: 'Corrección ortotipográfica',
        precio:255.30,
        info:''
      },
      {
        id:2,
        nombre: 'Corrección de estilo',
        precio:825.10,
        info:''
      },
      {
        id:3,
        nombre: 'Informes de lectura',
        precio:120.30,
        info:''
      },
      {
        id:4,
        nombre: 'Maquetación',
        precio:863.40,
        info:''
      },
      {
        id:5,
        nombre: 'Diseño de portada',
        precio:50,
        info:''
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
