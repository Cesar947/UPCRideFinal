package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Reseña;
import com.myorg.upcride.model.Usuario;
import com.myorg.upcride.repository.ReseñaRepository;
import com.myorg.upcride.repository.UsuarioRepository;
import com.myorg.upcride.service.ReseñaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReseñaServiceImpl implements ReseñaService {

    ReseñaRepository reseñaRepository;
    UsuarioRepository conductorRepository;
    @Autowired
    public ReseñaServiceImpl(ReseñaRepository reseñaRepository, UsuarioRepository conductorRepository){
        this.reseñaRepository = reseñaRepository;
        this.conductorRepository = conductorRepository;
    }

    @Override
    public Reseña publicarReseña(Reseña r) throws Exception{
        return reseñaRepository.save(r);
    }


    @Override
    public List<Reseña> listarReseñasPorConductor (Integer conductorId){
        return reseñaRepository.listarReseñasPorConductor(conductorId);
    }

    @Override
    public Reseña publicarReseñaPorConductor(Reseña r, Integer conductorId ) throws Exception{
        Usuario conductor = conductorRepository.findById(conductorId).get();
        r.setConductor(conductor);
        return reseñaRepository.save(r);

    }
}
