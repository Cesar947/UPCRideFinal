package com.myorg.upcride.repository;

import com.myorg.upcride.model.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransaccionRepository extends JpaRepository<Transaccion, Integer> {

}
