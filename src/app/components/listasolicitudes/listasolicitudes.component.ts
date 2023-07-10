import { Component } from '@angular/core';

@Component({
  selector: 'app-listasolicitudes',
  templateUrl: './listasolicitudes.component.html',
  styleUrls: ['./listasolicitudes.component.scss']
})
export class ListasolicitudesComponent {
  solicitudes: any[] = []; // Array para almacenar las solicitudes

  agregarSolicitud(formData: any) {
    this.solicitudes.push(formData); // Agregar la solicitud al array
  }
}