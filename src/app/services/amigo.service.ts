import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amigo } from '../model/amigo.model';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AmigoService {

  private baseUrl = 'http://localhost:8080/gastosApp-0.0.1-SNAPSHOT/';

  constructor(private http: HttpClient) { }

  addAmigo(amigo: any): Observable<any> {
    console.log('Recibido: '+amigo)
    return this.http.post('http://localhost:8080/gastosApp-0.0.1-SNAPSHOT/addAmigo', amigo);
  }

  saveAmigo(amigo: Amigo) {

    console.log('Nuevo Recibido: '+amigo.nombre)
    let bodyString = JSON.stringify(amigo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    this.http.post('http://localhost:8080/gastosApp-0.0.1-SNAPSHOT/addAmigo', bodyString, options) 
    .subscribe();
  }

  getAmigos(): Observable<any> {
    return this.http.post('http://localhost:8080/gastosApp-0.0.1-SNAPSHOT/getAmigos', null);
  }
}
