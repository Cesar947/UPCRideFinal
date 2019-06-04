package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Solicitud;
import com.myorg.upcride.repository.SolicitudRepository;
import com.myorg.upcride.service.SolicitudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SolicitudServiceImpl implements SolicitudService {

    private SolicitudRepository solicitudRepository;

    @Autowired
    public SolicitudServiceImpl(SolicitudRepository solicitudRepository){
        this.solicitudRepository = solicitudRepository;
    }

   /* @Override
    public boolean insert(Solicitud t) throws Exception{
        return solicitudRepository.insert(t);
    }

    @Override
    public boolean update(Solicitud t) throws Exception{
        return solicitudRepository.update(t);
    }

    @Override
    public boolean delete(Solicitud t) throws Exception{
        return solicitudRepository.delete(t);
    }

    @Override
    public List<Solicitud> list() throws Exception{
        return solicitudRepository.list();
    }

    @Override
    public Solicitud listById(Solicitud t) throws Exception{
        return solicitudRepository.listById(t);
    }*/
}
