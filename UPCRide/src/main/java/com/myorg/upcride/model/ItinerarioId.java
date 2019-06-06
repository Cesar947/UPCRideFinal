package com.myorg.upcride.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Embeddable
@AllArgsConstructor
@Data
@NoArgsConstructor
public class ItinerarioId implements Serializable {

    @Column (name="hora", length = 50, nullable = false)
    private String hora;

    @Column (name="dia", length = 50 , nullable = false )
    private String dia;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

}
