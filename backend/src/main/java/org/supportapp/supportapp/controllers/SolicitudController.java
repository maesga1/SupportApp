package org.supportapp.supportapp.controllers;

import org.springframework.web.bind.annotation.*;
import org.supportapp.supportapp.models.Solicitud;
import org.supportapp.supportapp.services.SolicitudService;

import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost/4200")
public class SolicitudController {

    SolicitudService solicitudService;

    @GetMapping("/solicitudes")
    public List<Solicitud> obtenerSolicitudes() {
        return solicitudService.getSolicitudes();
    }

    @PostMapping("/solicitudes")
    public Solicitud añadirSolicitud(@RequestBody Solicitud solicitud) {
        return solicitudService.addSolicitud(solicitud);
    }

    @PutMapping("/solicitudes")
    public Solicitud editarSolictud(@RequestBody Solicitud solicitud) {
        return solicitudService.editarSolictud(solicitud);
    }
}
