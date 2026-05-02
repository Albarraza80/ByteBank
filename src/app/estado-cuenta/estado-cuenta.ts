import { Component, OnInit } from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Transferencias } from '../services/transferencias';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'estado-cuenta',
  imports: [DatePipe, NgTemplateOutlet],
  templateUrl: './estado-cuenta.html',
  styleUrl: './estado-cuenta.scss',
})
export class EstadoCuenta implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(private service: Transferencias) {
  }

  ngOnInit(): void {
    this.service.todas().subscribe((m: Transferencia[]) => {
      this.transferencias = m;
    });
  }
}
