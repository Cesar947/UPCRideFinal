package com.myorg.upcride.controller;


import com.myorg.upcride.model.Viaje;
import com.myorg.upcride.service.ViajeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/viajes")
public class ViajeController {

    private ViajeService viajeService;

    @Autowired
    public ViajeController(ViajeService viajeService){
        this.viajeService = viajeService;
    }

    @RequestMapping
    public List<Viaje> visualizarViajesRegistrados() throws Exception
    {
        return viajeService.visualizarViajes();
    }


    @RequestMapping(method = RequestMethod.POST)
    public Viaje publicarViaje(@RequestBody Viaje v) throws Exception {

        return viajeService.publicarViaje(v);
    }

    @RequestMapping(path="/{id}", method = RequestMethod.GET)
    public Viaje buscarViajePorId(@PathVariable Integer id) throws Exception{
        return viajeService.buscarViaje(id);
    }
}