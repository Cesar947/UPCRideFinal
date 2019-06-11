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
import javax.persistence.Table;


@Entity

@Table(name = "auto")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Auto implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "auto_id")
    private Integer id;

    @Column (name="placa", length = 50, nullable = false)
    private int placa;

    @Column (name="poliza_soat", length = 50 , nullable = false )
    private int polizaSoat;

    @Column (name="marca", length = 50 , nullable = false )
    private String marca;

    @Column (name="modelo", length = 50 , nullable = false )
    private String modelo;

    @Column (name="limite_personas", length = 50 , nullable = false )
    private int limitePersonas;

    @Column (name="codigo_usuario", length = 50 , nullable = false )
    private Usuario codigoUsuario;


}