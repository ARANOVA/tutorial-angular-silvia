import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface Editorial{
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-editoriales-sugeridas',
  templateUrl: './editoriales-sugeridas.component.html',
  styleUrls: ['./editoriales-sugeridas.component.scss']
})
export class EditorialesSugeridasComponent implements OnInit {
  editoriales: Editorial[] | undefined;

  constructor(
    private _router: Router,
    private _ngZone: NgZone
  ) { 
    this.editoriales = [
      {
        nombre:'Bruno Mars',
        email:'bmars@editorial.com'
      },
      {
        nombre:'Circulo Rojo',
        email:'circojo@circuloeditorial.com'
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
