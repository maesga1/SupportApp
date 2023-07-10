import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListasolicitudesComponent } from './components/listasolicitudes/listasolicitudes.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsListComponent } from './components/request-list/request-list.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestsListComponent,
    FormularioComponent,
    ListasolicitudesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
