import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EdicionSolicitudComponent } from './edicion-solicitud.component';

@NgModule({
  declarations: [EdicionSolicitudComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [EdicionSolicitudComponent]
})
export class EdicionSolicitudModule { }
