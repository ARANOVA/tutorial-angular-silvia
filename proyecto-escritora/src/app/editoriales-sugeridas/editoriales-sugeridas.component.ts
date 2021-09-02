import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface editorial{
  nombre: string;
  telefono: number;
  email: string;
}

@Component({
  selector: 'app-editoriales-sugeridas',
  templateUrl: './editoriales-sugeridas.component.html',
  styleUrls: ['./editoriales-sugeridas.component.scss']
})
export class EditorialesSugeridasComponent implements OnInit {
  editoriales: editorial | undefined;

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
