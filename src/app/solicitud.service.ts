import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = 'api/solicitudes'; // URL del backend

  constructor(private http: HttpClient) { }

  obtenerSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.apiUrl);
  }

  crearSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.apiUrl, solicitud);
  }

  obtenerSolicitud(id: number): Observable<Solicitud> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Solicitud>(url);
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    const url = `${this.apiUrl}/${solicitud.id}`;
    return this.http.put<Solicitud>(url, solicitud);
  }

  eliminarSolicitud(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
