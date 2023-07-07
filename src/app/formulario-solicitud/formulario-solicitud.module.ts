import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormularioSolicitudComponent } from './formulario-solicitud.component';

@NgModule({
  declarations: [FormularioSolicitudComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [FormularioSolicitudComponent]
})
export class FormularioSolicitudModule { }