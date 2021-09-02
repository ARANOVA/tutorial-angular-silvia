import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-recomendados',
  templateUrl: './libros-recomendados.component.html',
  styleUrls: ['./libros-recomendados.component.scss']
})
export class LibrosRecomendadosComponent implements OnInit {
  libros: any | undefined;

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
