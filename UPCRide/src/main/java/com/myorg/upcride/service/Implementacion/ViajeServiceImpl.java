package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Auto;
import com.myorg.upcride.model.Solicitud;
import com.myorg.upcride.model.Usuario;
import com.myorg.upcride.model.Viaje;
import com.myorg.upcride.repository.AutoRepository;

import com.myorg.upcride.repository.UsuarioRepository;
import com.myorg.upcride.repository.ViajeRepository;
import com.myorg.upcride.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;

import java.util.Date;
import java.util.List;

@Service
public class ViajeServiceImpl implements ViajeService {

    ViajeRepository viajeRepository;
    AutoRepository autoRepository;
    UsuarioRepository conductorRepository;

    @Autowired
    public ViajeServiceImpl(ViajeRepository viajeRepository, AutoRepository autoRepository, UsuarioRepository conductorRepository) {
        this.viajeRepository = viajeRepository;
        this.autoRepository = autoRepository;
        this.conductorRepository = conductorRepository;
    }


    @Override
    public Viaje publicarViaje(Viaje v, Integer conductorId) throws Exception {
        v.setEstado("Publicado");
        v.setVisualizacionHabilitada(1);
        Auto auto = autoRepository.buscarAutoPorConductor(v.getConductor().getId());
        v.setLimitePasajeros(auto.getLimitePersonas());
        v.setNumeroPasajeros(0);
        Usuario conductor = conductorRepository.findById(conductorId).get();
        v.setConductor(conductor);
        return viajeRepository.save(v);
    }

    @Override
    public Viaje buscarViaje(Integer id) throws Exception {
        return viajeRepository.findById(id).get();
    }

    @Override
    public List<Viaje> visualizarViajes() throws Exception {
        return viajeRepository.findAll();
    }

    @Override
    public List<Viaje> filtrar(String puntoPartida, String puntoDestino, Time horaPartida, Time horaLlegada, int entrada_salida, Date fecha) throws Exception {

        if (puntoPartida == null && puntoDestino == null && horaPartida == null && horaLlegada == null && entrada_salida == 2) {
            return viajeRepository.listarPorFecha(fecha);
        }
        else if(puntoPartida == null && puntoDestino == null && horaPartida == null && entrada_salida == 2 && fecha == null){
            return viajeRepository.listarPorHoraLlegada(horaLlegada);
        }
        else if (puntoPartida == null && puntoDestino == null && entrada_salida == 2 && fecha == null) {
            return viajeRepository.listarPorHoraInicioYHoraFin(horaPartida, horaLlegada);
        } else if (horaPartida == null && horaLlegada == null && entrada_salida == 2 && fecha == null) {
            return viajeRepository.listarPorPuntoPartidaYPuntoDestino(puntoPartida, puntoDestino);
        } else if (puntoPartida == null && puntoDestino == null && fecha == null && horaPartida == null && horaLlegada == null) {
            return viajeRepository.listarPorEntradaOSalida(entrada_salida);

        }
       else if (entrada_salida == 2 && fecha == null) {
            return viajeRepository.listarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFin(puntoPartida, puntoDestino, horaPartida, horaLlegada);
        } else if (entrada_salida == 2) {

            return viajeRepository.listarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFinYFecha( horaPartida, horaLlegada, puntoPartida, puntoDestino, fecha);
        } else {
            return viajeRepository.listarPorTodosLosFiltros(horaPartida, horaLlegada, puntoPartida, puntoDestino, entrada_salida, fecha);

        }
    }
    @Override
    public int actualizarEstado(String estado, int id) throws Exception{
        return viajeRepository.actualizarEstado(estado, id);
    }
    @Override
    public List<Viaje> listarPorSolicitudyPorPasajero(int solicitudId, int pasajeroId) throws Exception{
        return viajeRepository.listarPorSolicitudyPorPasajero(solicitudId, pasajeroId);
    }

    @Override
    public Viaje actualizarNumeroDePasajeros(Integer id) throws Exception{
       int resultado = viajeRepository.calcularNumerodePasajerosDelViaje(id);
       return viajeRepository.actualizarNumeroDePasajeros(resultado,id);
    }

    @Override
    public List<Usuario> listarPasajerosDelViaje(Integer viajeId) throws Exception{
        return viajeRepository.listarPasajerosDelViaje(viajeId);
    }

    @Override
    public List<Solicitud> listarSolicitudesPendientesDelViaje(Integer viajeId) throws Exception{
       return viajeRepository.listarSolicitudesPendientesDelViaje(viajeId);
    }
}

