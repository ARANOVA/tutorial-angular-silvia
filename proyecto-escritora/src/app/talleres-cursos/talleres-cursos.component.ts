import { Component, OnInit, NgZone, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Taller{
  nombre: string;
  descripcion: string;
}

export interface Dialog{
  name: string;
  email: string;
}

@Component({
  selector: 'app-talleres-cursos',
  templateUrl: './talleres-cursos.component.html',
  styleUrls: ['./talleres-cursos.component.scss']
})
export class TalleresCursosComponent implements OnInit {
  talleres: Taller[] | undefined;
  name = '';  
  email='';

  constructor(
    public dialog2: MatDialog,
    private _router: Router,
    private _ngZone: NgZone
  ) {
    this.talleres = [
      {
      nombre:'Taller de lectura',
      descripcion:'Suscribiéndote a este curso podrás leer un libro diferente cada semana. <br>Si te suscribes nosotros te enviamos sugerencias por correo electrónico.'
      },
      {
        nombre:'Taller de escritura',
        descripcion:'Es ideal para quienes pretenden iniciarse en el mundo de la escritura. <br>¡Suscríbete para empezar tu aventura!'
      }
    ]
  }

  ngOnInit(): void {
  }

  openDialog() :void{
    const dialogRef = this.dialog2.open(TalleresDialog, {
      width: '250px',
      data: {name: this.name, email: this.email}
    });
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }

  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}

@Component({
  selector:'talleres-dialog',
  templateUrl:'talleres-dialog.html',
})

export class TalleresDialog{
  dialog: Dialog[] | undefined;


  constructor(
    public dialogRef: MatDialogRef<TalleresDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}