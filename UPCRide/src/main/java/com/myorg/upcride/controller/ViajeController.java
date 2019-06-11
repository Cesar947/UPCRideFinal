package com.myorg.upcride.controller;


import com.myorg.upcride.model.Viaje;
import com.myorg.upcride.service.ViajeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.text.SimpleDateFormat;
import java.util.Date;
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

    @RequestMapping(path="/filtros", method = RequestMethod.GET)
    public List<Viaje> Filtrar(@RequestParam(value = "puntoPartida" , required = false) String puntoPartida,
                               @RequestParam(value="puntoDestino", required = false) String puntoDestino,
                               @RequestParam(value="horaPartida", required = false)  String horaPartida,
                               @RequestParam(value="horaLlegada", required = false)  String horaLlegada,
                               @RequestParam(value="entrada_salida", defaultValue = " ") char entrada_salida,
                               @RequestParam(value="fecha", required = false) String fecha
                              ) throws Exception{


        return viajeService.Filtrar(puntoPartida,
                puntoDestino,
                horaPartida,
                horaLlegada,
                entrada_salida, fecha);

    }

    @RequestMapping(path="update/{id}", method = RequestMethod.PUT)
    public int updateViaje(@RequestBody String estado, @PathVariable("id") Integer id) throws Exception{
        return viajeService.Update(estado, id);
    }
}