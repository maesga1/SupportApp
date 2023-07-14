import { Component } from '@angular/core';
import { SolicitudService } from 'src/services/solicitud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent {
  formData = {
    id: 0,
    nombre: '',
    fecha: '',
    tema: '',
    descripcion: ''
  };

  temas = ['Software', 'Hardware', 'Soporte'];

  constructor(public service: SolicitudService) { }

  submitForm(): void {
    console.log(this.formData);

    this.service.crearSolicitud(this.formData);

  }
}
