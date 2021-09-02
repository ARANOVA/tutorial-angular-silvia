import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface tarifa{
  precio: number;
}

@Component({
  selector: 'app-tarifas-edicion',
  templateUrl: './tarifas-edicion.component.html',
  styleUrls: ['./tarifas-edicion.component.scss']
})
export class TarifasEdicionComponent implements OnInit {
  tarifas: tarifa | undefined;

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
