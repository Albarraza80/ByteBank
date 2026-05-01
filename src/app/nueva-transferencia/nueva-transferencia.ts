import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transferencia } from '../models/transferencia.model';
import { Transferencias } from '../services/transferencias';

@Component({
  selector: 'nueva-transferencia',
  imports: [FormsModule],
  templateUrl: './nueva-transferencia.html',
  styleUrl: './nueva-transferencia.scss',
})
export class NuevaTransferencia {
 
  constructor(private service : Transferencias) {}

  valor: string = ""
  destino: string = ""

  transferir() {
    const datos: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      fecha: new Date()
    }

    this.service.agregar(datos).subscribe({
      next: (respuesta: Transferencia) => {
        console.log(respuesta);
      },
      error: (err) => console.error(err),
    });
    
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.valor = "";
    this.destino = "";
  }
}
