package com.myorg.upcride.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.*;


@Entity
@Table(name = "itinerario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Itinerario implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="itinerario_id")
    private Integer id;

    @Column (name="entrada_salida", length = 50 , nullable = false ) //E: Entrada - S: Salida
    private int entrada_salida;

    @Column (name="partida_latitud", length = 50 , nullable = false )
    private double partidaLatitud;

    @Column (name="partida_longitud", length = 50 , nullable = false )
    private double partidaLongitud;
    
    @Column (name="destino_latitud", length = 50 , nullable = false )
    private double destinoLatitud;

    @Column (name="destino_longitud", length = 50 , nullable = false )
    private double destinoLongitud;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Usuario cliente;

    @Column (name="hora", length = 50, nullable = false)
    private Time hora;

    @Column (name="dia", length = 50 , nullable = false )
    private String dia;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
