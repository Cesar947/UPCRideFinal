package com.myorg.upcride.service.Implementacion;

import com.myorg.upcride.model.Usuario;
import com.myorg.upcride.repository.UsuarioRepository;
import com.myorg.upcride.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {


    UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }


    @Override
    public Usuario registrarUsuario(Usuario u) throws Exception {
        return usuarioRepository.save(u);
    }

    @Override
    public Usuario verPerfil(Integer id) throws Exception {
        return usuarioRepository.findById(id).get();
    }

    @Override
    public List<Usuario> visualizarUsuariosRegistrados() throws Exception {
        return usuarioRepository.findAll();
    }


}
