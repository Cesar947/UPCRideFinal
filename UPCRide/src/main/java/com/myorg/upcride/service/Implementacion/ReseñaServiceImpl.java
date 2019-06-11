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

   /* @Override
    public boolean insert(Reseña t) throws Exception{
        return reseñaRepository.insert(t);
    }

    @Override
    public boolean update(Reseña t) throws Exception{
        return reseñaRepository.update(t);
    }

    @Override
    public boolean delete(Reseña t) throws Exception{
        return reseñaRepository.delete(t);
    }

    @Override
    public List<Reseña> list() throws Exception{
        return reseñaRepository.list();
    }

    @Override
    public Reseña listById(Reseña t) throws Exception{
        return reseñaRepository.listById(t);
    }
*/
}
