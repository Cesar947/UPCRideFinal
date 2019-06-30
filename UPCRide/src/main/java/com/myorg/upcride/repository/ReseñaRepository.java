package com.myorg.upcride.repository;

import com.myorg.upcride.model.Reseña;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReseñaRepository extends JpaRepository<Reseña, Integer> {
    @Query("SELECT r FROM Reseña r WHERE r.conductor =?1")
    List<Reseña> listarReseñasPorConductor (Integer conductorId);
}
