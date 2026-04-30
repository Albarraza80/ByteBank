import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Transferencias } from '../services/transferencias';

@Component({
  selector: 'estado-cuenta',
  imports: [DatePipe, NgTemplateOutlet],
  templateUrl: './estado-cuenta.html',
  styleUrl: './estado-cuenta.scss',
})
export class EstadoCuenta implements OnInit {
  transferencias: any = {};

  constructor(private service: Transferencias) {

  }

  ngOnInit(): void {
    this.service.todas().subscribe((m) => {
      console.table(m);
    });
  }
}
