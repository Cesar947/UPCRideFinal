package com.myorg.upcride.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "viaje")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Viaje implements Serializable {
   // private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "viaje_id")
    private Integer viajeID;

    @ManyToOne
    @JoinColumn(name = "conductor_id")
    private Usuario conductor;

   @Column (name = "descripcion", length = 500, nullable = false)
    private String descripcion;

   @Column(name = "pntPartida", length = 60, nullable = false)
    private String pntPartida;

  @Column(name = "pntDestino", length = 60, nullable = false)
    private String pntDestino;

    @Column (name = "horaPartida", nullable = false)
    private String horaPartida;

    @Column (name = "horaLlegada", nullable = false)
    private String horaLlegada;

    @Column (name = "entrada_salida", nullable = false)
    private int entrada_salida;

    @Column (name = "fechaViaje", nullable = false)
    private String fechaViaje;

   @Column (name = "dia", length = 20, nullable = false)
    private String dia;

    @Column (name = "estado", length = 60, nullable = true)
    private String estado;

   @Column (name = "visualizacionHabilitada", nullable = false)
    private int visualizacionHabilitada;




}
