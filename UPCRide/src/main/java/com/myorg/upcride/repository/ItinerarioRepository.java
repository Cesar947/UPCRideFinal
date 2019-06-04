package com.myorg.upcride.repository;

import com.myorg.upcride.model.Itinerario;
import com.myorg.upcride.model.ItinerarioId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItinerarioRepository extends JpaRepository<Itinerario, ItinerarioId> {
  //  Itinerario listByPK(Itinerario itinerario) throws Exception;
}
