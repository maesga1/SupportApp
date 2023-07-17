package org.supportapp.supportapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.supportapp.supportapp.models.Solicitud;

public interface SolicitudRepository extends JpaRepository<Solicitud, Long> {
}
