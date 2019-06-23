package com.myorg.upcride.service;


import com.myorg.upcride.model.Viaje;

import java.util.Date;
import java.util.List;

public interface ViajeService {

    Viaje publicarViaje(Viaje v) throws Exception;
    Viaje buscarViaje(Integer id) throws Exception;
    List<Viaje> visualizarViajes() throws Exception;
    List<Viaje> filtrar(String puntoPartida,String puntoDestino, String horaPartida, String horaLlegada, int entrada_salida, String fecha) throws Exception;
    int actualizarEstado(String estado, int id) throws Exception;
    List<Viaje> listarPorSolicitudyPorPasajero(int solicitudId, int pasajeroId) throws Exception;
    Viaje actualizarNumeroDePasajeros(Integer id) throws Exception;


}
