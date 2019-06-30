package com.myorg.upcride.service;

import com.myorg.upcride.model.Reseña;

import java.util.List;

public interface ReseñaService{
    Reseña publicarReseña(Reseña r) throws Exception;
    List<Reseña> listarReseñasPorConductor (Integer conductorId);
    Reseña publicarReseñaPorConductor(Reseña r, Integer pasajeroId, Integer conductorId) throws Exception;
}
