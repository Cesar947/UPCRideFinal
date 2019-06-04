package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Auto;
import com.myorg.upcride.repository.AutoRepository;
import com.myorg.upcride.service.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AutoServiceImpl implements AutoService {

    AutoRepository autoRepository;

    @Autowired
    public AutoServiceImpl(AutoRepository autoRepository){
        this.autoRepository = autoRepository;
    }

 /*   @Override
    public boolean insert(Auto t) throws Exception{
        return autoRepository.insert(t);
    }

    @Override
    public boolean update(Auto t) throws Exception{
        return autoRepository.update(t);
    }

    @Override
    public boolean delete(Auto t) throws Exception{
        return autoRepository.delete(t);
    }

    @Override
    public List<Auto> list() throws Exception{
        return autoRepository.list();
    }

    @Override
    public Auto listById(Auto t) throws Exception{
        return autoRepository.listById(t);
    }*/
}
