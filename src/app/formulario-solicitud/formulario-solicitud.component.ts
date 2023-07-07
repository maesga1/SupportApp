import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitud } from '../solicitud.model';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-formulario-solicitud',
  templateUrl: './formulario-solicitud.component.html',
  styleUrls: ['./formulario-solicitud.component.scss']
})
export class FormularioSolicitudComponent {

  solicitud: Solicitud = new Solicitud();

  constructor(private solicitudService: SolicitudService) { }

  enviarSolicitud(): void {
    if (this.solicitudFormulario.valid) {
      this.solicitudService.crearSolicitud(this.solicitud)
        .subscribe(
          (nuevaSolicitud: Solicitud) => {
  
          },
          (error) => {
          }
        );
    }
  }

  resetearFormulario(): void {
    this.solicitud = new Solicitud();
    this.solicitudFormulario.resetForm();
  }

}
