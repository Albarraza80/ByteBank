import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'nueva-transferencia',
  imports: [FormsModule],
  templateUrl: './nueva-transferencia.html',
  styleUrl: './nueva-transferencia.scss',
})
export class NuevaTransferencia {
  @Output() enviarDatos = new EventEmitter<any>()

  valor: string = ""
  destino: string = ""

  transferir() {
    const datos = {
      valor: this.valor,
      destino: this.destino,
      fecha: new Date()
    }

    this.enviarDatos.emit( datos )
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.valor = "";
    this.destino = "";
  }
}
