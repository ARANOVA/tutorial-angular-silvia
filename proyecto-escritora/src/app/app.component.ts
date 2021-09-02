import { Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proyecto-escritora';
  opened: boolean = true;
  @ViewChild("sidenav") sidenav!: MatSidenav;

  constructor(
    private _router: Router,
    private _ngZone: NgZone
    ) {
  }

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  
  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}
