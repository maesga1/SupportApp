import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Solicitud } from '../solicitud.model';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-edicion-solicitud',
  templateUrl: './edicion-solicitud.component.html',
  styleUrls: ['./edicion-solicitud.component.scss']
})
export class EdicionSolicitudComponent implements OnInit {

  solicitud: Solicitud = new Solicitud();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solicitudService: SolicitudService
  ) { }

  ngOnInit(): void {
    const solicitudId = this.route.snapshot.paramMap.get('id');
    if (solicitudId) {
      this.obtenerSolicitud(solicitudId);
    } else {
     
    }
  }

  obtenerSolicitud(solicitudId: string): void {
    this.solicitudService.obtenerSolicitud(solicitudId)
      .subscribe(
        (solicitud: Solicitud) => {
          this.solicitud = solicitud;
        },
        (error) => {
          // Manejar errores al obtener la solicitud
        }
      );
  }

  guardarCambios(): void {
    if (this.solicitudFormulario.valid) {
      this.solicitudService.actualizarSolicitud(this.solicitud)
        .subscribe(
          (solicitudActualizada: Solicitud) => {
           // Realizar acciones después de actualizar la solicitud exitosamente
            this.router.navigate(['/lista-solicitudes']);
          },
          (error) => {
            // Manejar errores al actualizar la solicitud
          }
        );
    }
  }

  cancelarEdicion(): void {
    this.router.navigate(['/lista-solicitudes']);
  }

}
