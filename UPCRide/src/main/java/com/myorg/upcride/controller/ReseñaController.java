

import com.myorg.upcride.model.Reseña;
import com.myorg.upcride.service.ReseñaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/reseñas")
public class ReseñaController {

    private ReseñaService reseñaService;

    @Autowired
    public ReseñaController(ReseñaService reseñaService){
        this.reseñaService = reseñaService;
    }


    @RequestMapping
    public Reseña PublicarReseñas(Reseña r) throws Exception {
        return reseñaService.PublicarReseña(r);
    }

    @RequestMapping(path="/{conductorId}", method = RequestMethod.GET)
    public List<Reseña> ListarResñasPorConductor(@PathVariable Integer conductorId) throws Exception{
        return reseñaService.ListaReseñasPorConductor(conductorId);
    }

}