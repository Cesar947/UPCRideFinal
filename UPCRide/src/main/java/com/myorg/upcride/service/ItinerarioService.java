package com.myorg.upcride.service;

import com.myorg.upcride.model.Itinerario;
import com.myorg.upcride.model.ItinerarioId;

import java.util.List;

public interface ItinerarioService {
    //Itinerario registrarItinerario(ItinerarioId nuevoItinerarioID, Itinerario nuevoItinerario) throws Exception;

    List<Itinerario> listarItinerarios() throws Exception;

    Itinerario registrarItinerario(Itinerario nuevoItinerario) throws Exception;
}
