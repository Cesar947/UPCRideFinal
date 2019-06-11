package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Viaje;
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

    @Autowired
    public ViajeServiceImpl(ViajeRepository viajeRepository) {
        this.viajeRepository = viajeRepository;
    }


    @Override
    public Viaje publicarViaje(Viaje v) throws Exception {
        v.setEstado("Disponible");
        v.setVisualizacionHabilitada(1);
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
    public List<Viaje> Filtrar(String puntoPartida, String puntoDestino, String horaPartida, String horaLlegada, int entrada_salida, String fecha) throws Exception {

        if (puntoPartida == null && puntoDestino == null && horaPartida == null && horaLlegada == null && entrada_salida == 0) {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());

            return viajeRepository.ListarPorFecha(sql);
        } else if (puntoPartida == null && puntoDestino == null && entrada_salida == 0 && fecha == null) {
            return viajeRepository.ListarPorHoraInicioYHoraFin(horaPartida, horaLlegada);
        } else if (horaPartida == null && horaLlegada == null && entrada_salida == 0 && fecha == null) {
            return viajeRepository.ListarPorPuntoPartidaYPuntoDestino(puntoPartida, puntoDestino);
        } else if (puntoPartida == null && puntoDestino == null && fecha == null && horaPartida == null && horaLlegada == null) {
            return viajeRepository.ListarPorEntradaOSalida(entrada_salida);

        } else if (entrada_salida == 0 && fecha == null) {
            return viajeRepository.ListarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFin(puntoPartida, puntoDestino, horaPartida, horaLlegada);
        } else if (entrada_salida == 0) {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());
            return viajeRepository.ListarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFinYFecha(puntoPartida, puntoDestino, horaPartida, horaLlegada, sql);
        } else {
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
            Date parsed = format.parse(fecha);
            java.sql.Date sql = new java.sql.Date(parsed.getTime());
            return viajeRepository.ListarPorTodosLosFiltros(horaPartida, horaLlegada, puntoPartida, puntoDestino, entrada_salida, sql);

        }

    }
    @Override
    public int Update(String estado, int id) throws Exception{
        return viajeRepository.Update(estado, id);
    }
}

