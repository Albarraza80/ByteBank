import { Component } from '@angular/core';
import { NuevaTransferencia } from "./nueva-transferencia/nueva-transferencia";
import { EstadoCuenta } from "./estado-cuenta/estado-cuenta";
import { Transferencias } from './services/transferencias';

@Component({
  selector: 'app-root',
  imports: [NuevaTransferencia, EstadoCuenta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private service:Transferencias){}

  transferir( $event: any ) {
    this.service.agregar($event);
  }
}
