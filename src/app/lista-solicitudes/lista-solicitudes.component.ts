import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud.model';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.scss']
})
export class ListaSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(): void {
    this.solicitudService.obtenerSolicitudes()
      .subscribe(
        (solicitudes: Solicitud[]) => {
          this.solicitudes = solicitudes;
        },
        (error) => {
          
        }
      );
  }

}
