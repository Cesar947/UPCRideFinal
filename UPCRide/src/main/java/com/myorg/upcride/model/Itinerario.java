package com.myorg.upcride.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import javax.persistence.*;


@Entity
@Table(name = "itinerario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Itinerario implements Serializable{

    @EmbeddedId
    private ItinerarioId codigoItinerario;

    @Column (name="entrada_salida", length = 50 , nullable = false ) //E: Entrada - S: Salida
    private int entrada_salida;

    @Column (name="punto_partida_latitud", length = 50 , nullable = false )
    private double puntoPartidaLatitud;

    @Column (name="punto_partida_longitud", length = 50 , nullable = false )
    private double puntoPartidaLongitud;

}
