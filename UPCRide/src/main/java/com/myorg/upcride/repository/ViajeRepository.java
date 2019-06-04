package com.myorg.upcride.repository;

import com.myorg.upcride.model.Viaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje, Integer> {

}
