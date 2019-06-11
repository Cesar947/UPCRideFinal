package com.myorg.upcride.repository;

import com.myorg.upcride.model.Viaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje, Integer> {

    @Query("SELECT v FROM Viaje v WHERE v.horaPartida = ?1 and v.horaLlegada = ?2 AND v.puntoPartida = ?3 AND v.puntoDestino = ?4 AND v.entrada_salida= ?5 AND v.fecha = ?6")
    List<Viaje> ListarPorTodosLosFiltros( String horaPartida, String horaLlegada,String puntoPartida,String puntoDestino, char entrada_salida, Date fecha) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.puntoPartida = ?1 AND v.puntoDestino = ?2")
    List<Viaje> ListarPorPuntoPartidaYPuntoDestino(String puntoPartida,String puntoDestino) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.horaPartida = ?1 and v.horaLlegada = ?2")
    List<Viaje> ListarPorHoraInicioYHoraFin(String horaPartida, String HoraLlegada) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.puntoPartida = ?1 AND v.puntoDestino = ?2 AND v.horaPartida = ?3 and v.horaLlegada = ?4")
    List<Viaje> ListarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFin(String puntoPartida,String puntoDestino, String horaPartida, String HoraLlegada) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.horaPartida = ?1 and v.horaLlegada = ?2 AND v.puntoPartida = ?3 AND v.puntoDestino = ?4 AND v.fecha = ?5")
    List<Viaje>ListarPorPuntoPartidaYPuntoDestinoYHoraInicioYHoraFinYFecha( String horaPartida, String horaLlegada,String puntoPartida,String puntoDestino, Date fecha) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.entrada_salida= ?1")
    List<Viaje> ListarPorEntradaOSalida(char entrada_salida) throws Exception;

    @Query("SELECT v FROM Viaje v WHERE v.fecha = ?6")
    List<Viaje> ListarPorFecha(Date fecha) throws Exception;

    @Modifying
    @Query("UPDATE Viaje v SET v.estado = :estado WHERE v.id = :id")
    @Transactional
    int Update(@Param("estado") String estado, @Param("id") Integer id) throws Exception;
}
