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

    @Column (name="entrada_salida", length = 50 , nullable = false )
    private boolean entrada_salida;

    @Column (name="ubicacionPartida", length = 50 , nullable = false )
    private String ubicacionPartida;

    @Column (name="ubicacionDestino", length = 50 , nullable = false )
    private String ubicacionDestino;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Usuario cliente;






}
