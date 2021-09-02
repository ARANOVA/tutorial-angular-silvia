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

  toggle() {
    this.opened = !this.opened;
    console.log(this.sidenav);
    this.sidenav.toggle();
  }
  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}
