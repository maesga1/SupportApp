import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { FormularioSolicitudComponent } from './formulario-solicitud/formulario-solicitud.component';
import { EdicionSolicitudComponent } from './edicion-solicitud/edicion-solicitud.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-solicitudes', pathMatch: 'full' },
  { path: './lista-solicitudes', component: ListaSolicitudesComponent },
  { path: './formulario-solicitudformulario', component: FormularioSolicitudComponent },
  { path: './solicitud/:id', component: DetalleSolicitudComponent },
  { path: './edicion-solicitud/:id', component: EdicionSolicitudComponent },
  { path: '**', redirectTo: '/lista-solicitudes' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
