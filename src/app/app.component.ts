import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AmigoDialogComponent } from './amigo-dialog/amigo-dialog.component';
import { GastoDialogComponent } from './gasto-dialog/gasto-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JFgastosFront';


  constructor(private _dialog: MatDialog) {}

  openGastoDialogForm() {
    this._dialog.open(GastoDialogComponent);
  }

  openAmigoDialogForm() {
    this._dialog.open(AmigoDialogComponent);
  }
}

