package com.myorg.upcride.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
//
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name= "usuario")
public class Usuario implements Serializable {

   private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "usuario_id")
    private Integer id;

    @Column(name = "codigoUsuarioUPC")
    private String codigo;

    @Column(name = "email", length = 50, nullable = false)
    private String email;

    @Column(name = "contrasena", length = 40, nullable = false)
    private String contrasena;

    @Column(name = "nombres", length = 60, nullable = false)
    private String nombres;

   @Column(name = "apellidos", length = 60, nullable = true)
    private String apellidos;

   @Column(name = "ubicacion", length = 100, nullable = false)
    private String ubicacion;

   @Column(name = "facebookID", length = 60, nullable = true)
    private String facebookID;

    @Column(name = "telefono", length = 25, nullable = false)
    private String telefono;

    @Column(name = "distrito", length = 100, nullable = false)
    private String distrito;

    @Column(name = "rol")
    private char rol;

    @Column(name = "licenciaConducir", length = 9, nullable = true)
    private String licenciaConducir;

    @Column(name="sede", length = 20, nullable= false)
    private String sede;



}