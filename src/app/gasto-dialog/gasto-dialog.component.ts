import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gasto-dialog',
  templateUrl: './gasto-dialog.component.html',
  styleUrls: ['./gasto-dialog.component.scss']
})
export class GastoDialogComponent {

  title = 'Añadir gasto';

  gastoForm: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.gastoForm = this._fb.group({
      amigo: '',
      descripcion: 'Test',
      importe: 0     
    });
  }

}
