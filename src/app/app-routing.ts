import { Routes } from '@angular/router';
import { EstadoCuenta } from './estado-cuenta/estado-cuenta';
import { NuevaTransferencia } from './nueva-transferencia/nueva-transferencia';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estado',
    pathMatch: 'full',
  },
  {
    path: 'estado',
    component: EstadoCuenta
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferencia
  },
];
