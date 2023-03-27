import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../model/gasto.model';
import { HttpHeaders } from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class GastoService {


  constructor(private http: HttpClient) { 
  }


  getAmigos(): Observable<any> {
    return this.http.post('http://localhost:8080/gastosApp-0.0.1-SNAPSHOT/getGastos', null);
  }
}
