package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Solicitud;
import com.myorg.upcride.repository.SolicitudRepository;
import com.myorg.upcride.service.SolicitudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SolicitudServiceImpl implements SolicitudService {

    private SolicitudRepository solicitudRepository;

    @Autowired
    public SolicitudServiceImpl(SolicitudRepository solicitudRepository){
        this.solicitudRepository = solicitudRepository;
    }


    @Override
    public Solicitud GuardarSolicitud(Solicitud s) throws Exception {
        return solicitudRepository.save(s);
    }
}
