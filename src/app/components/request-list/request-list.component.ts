import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud.model';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitudes-listado',
  templateUrl: './solicitudes-listado.component.html',
  styleUrls: ['./solicitudes-listado.component.scss']
})
export class SolicitudesListadoComponent implements OnInit {
  solicitudes: Solicitud[];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
    this.solicitudes = this.solicitudService.getSolicitudes();
  }
}
