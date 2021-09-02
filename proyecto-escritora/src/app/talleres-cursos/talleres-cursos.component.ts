import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface taller{
  nombre: string;
}

@Component({
  selector: 'app-talleres-cursos',
  templateUrl: './talleres-cursos.component.html',
  styleUrls: ['./talleres-cursos.component.scss']
})
export class TalleresCursosComponent implements OnInit {
  talleres: taller | undefined;

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
