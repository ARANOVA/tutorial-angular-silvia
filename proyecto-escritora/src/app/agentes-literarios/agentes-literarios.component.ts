import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface agente{
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-agentes-literarios',
  templateUrl: './agentes-literarios.component.html',
  styleUrls: ['./agentes-literarios.component.scss']
})
export class AgentesLiterariosComponent implements OnInit {
  agentes: agente | undefined;

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
