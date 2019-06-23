package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Auto;
import com.myorg.upcride.model.Viaje;
import com.myorg.upcride.repository.AutoRepository;
import com.myorg.upcride.repository.ViajeRepository;
import com.myorg.upcride.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ViajeServiceImpl implements ViajeService {

    ViajeRepository viajeRepository;
    AutoRepository autoRepository;
    @Autowired
    public ViajeServiceImpl(ViajeRepository viajeRepository, AutoRepository autoRepository) {
        this.viajeRepository = viajeRepository;
        this.autoRepository = autoRepository;
    }


    @Override
    public Viaje publicarViaje(Viaje v) throws Exception {
        v.setEstado("Publicado");
        v.setVisualizacionHabilitada(1);
        Auto auto = autoRepository.buscarAutoPorConductor(v.getConductor().getId());
        v.setLimitePasajeros(auto.getLimitePersonas());
        v.setNumeroPasajeros(0);
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
    public List<Viaje> filtrar(String puntoPartida, String puntoDestino, String horaPartida, String horaLlegada, int entrada_salida, String fecha) throws Exception {

        if (puntoPartida == null && puntoDestino == null && horaPartida == null && horaLlegada == null && entrada_salida == 0) {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());

            return viajeRepository.listarPorFecha(sql);
        } else if (puntoPartida == null && puntoDestino == null && entrada_salida == 0 && fecha == null) {
            return viajeRepository.listarPorHoraInicioYHoraFin(horaPartida, horaLlegada);
        } else if (horaPartida == null && horaLlegada == null && entrada_salida == 0 && fecha == null) {
            return viajeRepository.listarPorPuntoPartidaYPuntoDestino(puntoPartida, puntoDestino);
        } else if (puntoPartida == null && puntoDestino == null && fecha == null && horaPartida == null && horaLlegada == null) {
            return viajeRepository.listarPorEntradaOSalida(entrada_salida);

        } else if (entrada_salida == 0 && fecha == null) {
            return viajeRepository.listarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFin(puntoPartida, puntoDestino, horaPartida, horaLlegada);
        } else if (entrada_salida == 0) {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());
            return viajeRepository.listarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFinYFecha(puntoPartida, puntoDestino, horaPartida, horaLlegada, sql);
        } else {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());
            return viajeRepository.listarPorTodosLosFiltros(horaPartida, horaLlegada, puntoPartida, puntoDestino, entrada_salida, sql);

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



}

