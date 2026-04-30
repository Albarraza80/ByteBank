import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Transferencias {
  listatransferencias: any[];
  url : string = 'http://localhost:3002/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listatransferencias = [];
  }

  todas(): Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url);
  }

  get transferencias(){
    return this.listatransferencias;
  }

  agregar($event:any){
    this.transferencias.push($event);
  }
}

