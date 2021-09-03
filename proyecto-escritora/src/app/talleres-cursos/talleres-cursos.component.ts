import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TalleresDialogComponent } from 'src/app/talleres-cursos/talleres-dialog/talleres-dialog.component';
import { Dialog, Taller } from 'src/app/interfaces/talleres.interface';

@Component({
    selector: 'app-talleres-cursos',
    templateUrl: './talleres-cursos.component.html',
    styleUrls: ['./talleres-cursos.component.scss']
})
export class TalleresCursosComponent implements OnInit {
    talleres: Taller[] | undefined;
    name: string[] = [];
    email = '';

    constructor(
        public dialog: MatDialog,
        private _router: Router,
        private _ngZone: NgZone
    ) {
        this.talleres = [
            {
                id: 1,
                nombre: 'Taller de lectura',
                descripcion: 'Suscribiéndote a este curso podrás leer un libro diferente cada semana. <br>Si te suscribes nosotros te enviamos sugerencias por correo electrónico.'
            },
            {
                id: 2,
                nombre: 'Taller de escritura',
                descripcion: 'Es ideal para quienes pretenden iniciarse en el mundo de la escritura. <br>¡Suscríbete para empezar tu aventura!'
            }
        ];
        this.talleres.forEach((taller: Taller) => {
            this.name[taller.id] = '';
        });
    }

    ngOnInit(): void {
    }

    openDialog(id: number): void {
        const dialogRef = this.dialog.open(TalleresDialogComponent, {
            width: '250px',
            data: <Dialog>{ name: this.name[id], email: this.email }
        });
        dialogRef.afterClosed().subscribe((result: string) => {
            console.log('The dialog was closed');
            // Asignar al taller
            this.email = result;
        });
    }

    navigate(route: string[]) {
        this._ngZone.run(() => {
            this._router.navigate(route);
        });
    }

}
