
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = '/api/solicitudes'; 

  constructor(private http: HttpClient) {}

  obtenerSolicitud(id: number): Observable<Solicitud> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Solicitud>(url);
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    const url = `${this.apiUrl}/${solicitud.id}`;
    return this.http.put<Solicitud>(url, solicitud);
  }

  crearSolicitud(solicitud:Solicitud): Observable<Solicitud> {
    const url= `${this.apiUrl}`
    return this.http.post<Solicitud>(url, solicitud);
  }



}
