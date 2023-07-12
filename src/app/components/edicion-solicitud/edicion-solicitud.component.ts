import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud.model';

@Component({
  selector: 'app-edicion-solicitud',
  templateUrl: './edicion-solicitud.component.html',
  styleUrls: ['./edicion-solicitud.component.scss']
})
export class EdicionSolicitudComponent implements OnInit {
  solicitud: Solicitud = {
    id: 0,
    nombre: '',
    fecha: '',
    tema: '',
    descripcion: ''
  };
  solicitudFormulario: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solicitudService: SolicitudService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const solicitudId = params.get('id');
      if (solicitudId) {
        this.obtenerSolicitud(parseInt(solicitudId, 10));
      }
    });
  }

  obtenerSolicitud(id: number): void {
    this.solicitudService.obtenerSolicitud(id).subscribe(
      (solicitud: Solicitud) => {
        this.solicitud = solicitud;
      },
      (error) => {
        console.error('Error al obtener la solicitud:', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.solicitudFormulario.valid) {
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe(
        (solicitudActualizada: Solicitud) => {
          this.router.navigate(['/lista-solicitudes']);
        },
        (error) => {
          console.error('Error al actualizar la solicitud:', error);
        }
      );
    }
  }

  cancelarEdicion(): void {
    this.router.navigate(['/lista-solicitudes']);
  }
}
