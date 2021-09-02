import { Component, NgZone, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proyecto-escritora';

  constructor(
    private _router: Router,
    private _ngZone: NgZone
    ) {
  }

  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}
