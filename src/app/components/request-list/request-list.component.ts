import { Component, OnInit } from '@angular/core';
import { Request } from 'src/models/request.model';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-requests-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestsListComponent implements OnInit {
  solicitudes: Request[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.solicitudes = this.requestService.getSolicitudes();
  }

  editSolicitud(id: number) {
    console.log(`Editar solicitud con ID ${id}`);
  }
}
