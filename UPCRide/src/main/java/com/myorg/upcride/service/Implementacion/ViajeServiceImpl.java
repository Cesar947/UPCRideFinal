package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Viaje;
import com.myorg.upcride.repository.ViajeRepository;
import com.myorg.upcride.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViajeServiceImpl implements ViajeService {

    ViajeRepository viajeRepository;

    @Autowired
    public ViajeServiceImpl(ViajeRepository viajeRepository){
        this.viajeRepository = viajeRepository;
    }


    @Override
    public Viaje publicarViaje(Viaje v) throws Exception {
        return viajeRepository.save(v);
    }

    @Override
    public Viaje buscarViaje(Integer id) throws Exception {
        return viajeRepository.findById(id).get();
    }

    @Override
    public List<Viaje> visualizarViajes() throws Exception {
        return viajeRepository.findAll();
    }
}

