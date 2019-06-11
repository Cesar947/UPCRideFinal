package com.myorg.upcride.repository;

import com.myorg.upcride.model.Auto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoRepository extends JpaRepository<Auto,Integer> {
}
