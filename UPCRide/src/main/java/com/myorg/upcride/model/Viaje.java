package com.myorg.upcride.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Date;

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
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "viaje_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "conductor_id")
    private Usuario conductor;

   @Column (name = "descripcion", length = 500, nullable = false)
    private String descripcion;

   @Column(name = "punto_partida", length = 60, nullable = false) //Distrito partida
    private String puntoPartida;

  @Column(name = "punto_destino", length = 60, nullable = false) //Distrito destino
    private String puntoDestino;

    @Column(name = "destino_latitud", length = 60, nullable = false)
    private double puntoDestinoLatitud;

    @Column(name = "destino_longitud", length = 60, nullable = false)
    private double puntoDestintoLongitud;

    @Column(name = "partida_latitud", length = 60, nullable = false)
    private double puntoPartidaLatitud;

    @Column(name = "partida_longitud", length = 60, nullable = false)
    private double puntoPartidaLongitud;

    @Column (name = "hora_partida", nullable = false)
    private String horaPartida;

    @Column (name = "hora_llegada", nullable = false)
    private String horaLlegada;

    @Column (name = "entrada_salida", nullable = false) //E: Entrada - S: Salida
    private char entrada_salida;

    @Column (name = "fecha", nullable = false)
    private Date fecha;

   @Column (name = "dia", length = 20, nullable = false)
    private String dia;

    @Column (name = "estado", length = 60, nullable = true)
    private String estado;

   @Column (name = "visualizacion_habilitada", nullable = false) //1: visible - 0: invisible
    private int visualizacionHabilitada;




}
