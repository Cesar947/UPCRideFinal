package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Reseña;
import com.myorg.upcride.repository.ReseñaRepository;
import com.myorg.upcride.service.ReseñaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReseñaServiceImpl implements ReseñaService {

    ReseñaRepository reseñaRepository;

    @Autowired
    public ReseñaServiceImpl(ReseñaRepository reseñaRepository){
        this.reseñaRepository = reseñaRepository;
    }

    @Override
    public Reseña PublicarReseña(Reseña r) throws Exception{
        return reseñaRepository.save(r);
    }


    @Override
    public List<Reseña> ListaReseñasPorConductor (Integer conductorId){
        return reseñaRepository.ListaReseñasPorConductor(conductorId);
    }
}
