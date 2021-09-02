import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editoriales-sugeridas',
  templateUrl: './editoriales-sugeridas.component.html',
  styleUrls: ['./editoriales-sugeridas.component.scss']
})
export class EditorialesSugeridasComponent implements OnInit {

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
