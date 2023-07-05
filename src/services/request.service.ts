import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from 'src/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:4200'; 
  getSolicitudes: any;

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  getRequest(id: number): Observable<Request> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Request>(url);
  }

  createRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, request);
  }

  updateRequest(request: Request): Observable<Request> {
    const url = `${this.apiUrl}/${request.id}`;
    return this.http.put<Request>(url, request);
  }

  deleteRequest(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
