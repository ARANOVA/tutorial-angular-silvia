import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface servicio{
  posicion: number;
  nombre: string;
}

const serv_data: servicio[] = [
  {posicion: 1, nombre:'Corrección ortotipográfica'},
  {posicion: 2, nombre:'Corrección de estilo'},
  {posicion: 3, nombre:'Informes de lectura'},
  {posicion: 4, nombre:'Maquetación'},
  {posicion: 5, nombre:'Diseño de portada'}
];

@Component({
  selector: 'app-servicios-editoriales',
  templateUrl: './servicios-editoriales.component.html',
  styleUrls: ['./servicios-editoriales.component.scss']
})
export class ServiciosEditorialesComponent implements OnInit {
  servicios: servicio[] | undefined;

  displayedColumns: string[] = ['posicion', 'nombre'];
  dataSource = serv_data;

  constructor(
    private _router: Router,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}
