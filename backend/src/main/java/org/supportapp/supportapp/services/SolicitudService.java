package org.supportapp.supportapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.supportapp.supportapp.models.Solicitud;
import org.supportapp.supportapp.repositories.SolicitudRepository;

@Service
public class SolicitudService {

    @Autowired
    SolicitudRepository solicitudRepository;

    public List<Solicitud> getSolicitudes() {
        return solicitudRepository.findAll();
    }

    public Solicitud addSolicitud(Solicitud solicitud) {
        return solicitudRepository.save(solicitud);
    }

    public Solicitud editarSolictud(Solicitud solicitud) {
        return solicitudRepository.save(solicitud);
    }

}
