package org.supportapp.supportapp.controllers;
import org.springframework.web.bind.annotation.*;
import org.supportapp.supportapp.models.Solicitud;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/solicitudes")

public class SolicitudController {
    private List<Solicitud> solicitudes = new ArrayList<>();

    @GetMapping
    public List<Solicitud> obtenerSolicitudes() {
        return solicitudes;
    }

    @PostMapping
    public Solicitud crearSolicitud(@RequestBody Solicitud solicitud) {
        solicitudes.add(solicitud);
        return solicitud;
    }
}
    

