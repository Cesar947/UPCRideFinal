package com.myorg.upcride.controller;



import com.myorg.upcride.model.Solicitud;
import com.myorg.upcride.service.SolicitudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/solicitudes")
public class SolicitudController {

    private SolicitudService solicitudService;

    @Autowired
    public SolicitudController(SolicitudService solicitudService){
        this.solicitudService = solicitudService;
    }

   /* @RequestMapping
    public List<Solicitud> listarSolicituds() throws Exception
    {
        return solicitudService.list();
    }
*/
}