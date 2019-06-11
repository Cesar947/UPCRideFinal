package com.myorg.upcride.repository;

import com.myorg.upcride.model.Reseña;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReseñaRepository extends JpaRepository<Reseña, Integer> {
}
