import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Amigo } from '../model/amigo.model';
import { AmigoService } from '../services/amigo.service';

@Component({
  selector: 'app-amigo-dialog',
  templateUrl: './amigo-dialog.component.html',
  styleUrls: ['./amigo-dialog.component.scss']
})
export class AmigoDialogComponent {
  
  amigoForm: FormGroup
  amigos: any[] = [];
  amigoModel: Amigo;

  constructor (private _amigoService: AmigoService, formBuilder: FormBuilder)  {
    this.amigoForm = formBuilder.group({
      nombre: ''
    });
    this.getAmigos();
    this.amigoModel = new Amigo();
  }

  getAmigos(): void {
    this._amigoService.getAmigos()
      .subscribe(amigo => {
        this.amigos = amigo;
        console. log(amigo);
      });
  }
  
  onSubmit(): void {
    console.log(this.amigoForm.value.nombre);
    this.amigoModel = new Amigo();
    this.amigoModel.nombre = this.amigoForm.value.nombre;
  }

  saveAmigo(): void {
    if (this.amigoForm.valid) {
      console.log(this.amigoForm.value);
      this._amigoService.saveAmigo(this.amigoForm.value.nombre);
    }
  }

      

}
