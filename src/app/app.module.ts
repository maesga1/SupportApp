import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListasolicitudesComponent } from './listasolicitudes/listasolicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListasolicitudesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormularioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
