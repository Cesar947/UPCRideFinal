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

/**
 *
 * @author slayz
 */

@Entity
@Table(name = "solicitud")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Solicitud implements Serializable {

   private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "solicitud_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Usuario cliente;

    @ManyToOne
    @JoinColumn(name ="viaje_id")
    private Viaje viaje;

    @Column(name = "mensajeSolicitud", length = 120, nullable = true)
    private String mensaje;

    @Column(name="confirmacion_conductor", length = 9, nullable = true)
    private boolean confirmacionConductor;


   @Column(name="punto_recojo", length = 30, nullable = true)
    private String puntoRecojo;



}
