package com.myorg.upcride.controller;



import com.myorg.upcride.model.Usuario;
import com.myorg.upcride.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @RequestMapping
    public List<Usuario> visualizarUsuariosRegistrados() throws Exception
    {
        return usuarioService.visualizarUsuariosRegistrados();
    }


    @RequestMapping(method = RequestMethod.POST)
    public Usuario registrarUsuario(@RequestBody Usuario usuario) throws Exception {

       return usuarioService.registrarUsuario(usuario);
    }

    @RequestMapping(path="/{id}", method = RequestMethod.GET)
    public Usuario verPerfil(@PathVariable Integer id) throws Exception{
        return usuarioService.verPerfil(id);
    }




}
