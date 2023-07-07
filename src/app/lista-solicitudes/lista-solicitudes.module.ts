import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaSolicitudesComponent } from './lista-solicitudes.component';

@NgModule({
  declarations: [ListaSolicitudesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ListaSolicitudesComponent]
})
export class ListaSolicitudesModule { }
