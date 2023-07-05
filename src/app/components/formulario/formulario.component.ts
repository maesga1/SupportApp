import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formData = {
    nombre: '',
    fecha: '',
    tema: '',
    descripcion: ''
  };

  temas = ['Software', 'Hardware', 'Soporte'];

  submitForm() {
    console.log(this.formData);
  }
}
