import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'proyecto-escritora';
  MatMenuTrigger: BehaviorSubject<any>;
  @ViewChild('MatMenuTriggerFor') trigger!: MatMenuTrigger;
  constructor(){
    this.MatMenuTrigger = new BehaviorSubject(null);
  }

  someMethod() {
    this.trigger.openMenu();
  }

}
