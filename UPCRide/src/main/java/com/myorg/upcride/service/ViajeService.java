package com.myorg.upcride.service;


import com.myorg.upcride.model.Viaje;

import java.util.List;

public interface ViajeService {

    Viaje publicarViaje(Viaje v) throws Exception;
    Viaje buscarViaje(Integer id) throws Exception;
    List<Viaje> visualizarViajes() throws Exception;
}
