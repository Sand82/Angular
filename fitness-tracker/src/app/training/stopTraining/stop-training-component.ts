import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  template: `<div
    fxFlex="300px"
    fxLayout="column"
    fxLayoutAlign="center center"
  >
    <h1 mat-dialog-title>Are you sure?</h1>
    <div mat-dailog-content>
      <p>You already got {{ data.progress }}%</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </div>
  </div>`,
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
}
