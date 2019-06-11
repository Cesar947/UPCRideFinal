package com.myorg.upcride.controller;



import com.myorg.upcride.model.Itinerario;
import com.myorg.upcride.model.ItinerarioId;
import com.myorg.upcride.service.ItinerarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/itinerario")
public class ItinerarioController {

    private ItinerarioService itinerarioService;

    @Autowired
    public ItinerarioController(ItinerarioService itinerarioService){
        this.itinerarioService = itinerarioService;
    }

 /*   @RequestMapping
    public List<Itinerario> listarItinerarios() throws Exception
    {
        return itinerarioService.list();
    }*/

    @RequestMapping
    public List<Itinerario> listarItinerarios() throws Exception
    {
        return itinerarioService.listarItinerarios();
    }

    @RequestMapping(path="/nuevo", method = RequestMethod.POST)
    public Itinerario registrarItinerario(@RequestBody Itinerario nuevoItinerario) throws Exception{
        return itinerarioService.registrarItinerario(nuevoItinerario);
    }

}
