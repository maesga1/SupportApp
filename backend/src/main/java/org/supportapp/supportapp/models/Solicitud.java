package org.supportapp.supportapp.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "solcitudes")
public class Solicitud {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "fecha")
    private Date fecha;
    @Column(name = "tema")
    private String tema;
    @Column(name = "descripcion")
    private String descripcion;

    public Solicitud(int id, String nombre, Date fecha, String tema, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.tema = tema;
        this.descripcion = descripcion;
    }

    public int getId() {
        return id;
    }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
