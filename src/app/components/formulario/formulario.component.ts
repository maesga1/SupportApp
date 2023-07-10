import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formData = {
    id: '',
    nombre: '',
    fecha: '',
    tema: '',
    descripcion: ''
  };

  temas = ['Software', 'Hardware', 'Soporte'];

  submitForm(): void {
    console.log(this.formData);
  }
}
