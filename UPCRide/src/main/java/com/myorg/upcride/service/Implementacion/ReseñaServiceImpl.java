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
    UsuarioRepository usuarioRepository;

    @Autowired
    public ReseñaServiceImpl(ReseñaRepository reseñaRepository, UsuarioRepository usuarioRepository){
        this.reseñaRepository = reseñaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Reseña publicarReseña(Reseña r) throws Exception{
        return reseñaRepository.save(r);
    }
    @Override
    public Reseña publicarReseñaPorConductor(Reseña r, Integer pasajeroId, Integer conductorId) throws Exception{
        Usuario conductor = usuarioRepository.findById(conductorId).get();
        Usuario pasajero = usuarioRepository.findById(pasajeroId).get();
        r.setPasajero(pasajero);
        r.setConductor(conductor);
        return reseñaRepository.save(r);

    }

    @Override
    public List<Reseña> listarReseñasPorConductor (Integer conductorId){
        return reseñaRepository.listarReseñasPorConductor(conductorId);
    }
}
