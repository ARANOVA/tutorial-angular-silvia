import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from 'src/app/interfaces/talleres.interface';

@Component({
  selector: 'app-talleres-dialog',
  templateUrl: './talleres-dialog.component.html',
  styleUrls: ['./talleres-dialog.component.scss']
})

export class TalleresDialogComponent{
  dialog: Dialog;


  constructor(
    public dialogRef: MatDialogRef<TalleresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog) {
      this.dialog = data;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}