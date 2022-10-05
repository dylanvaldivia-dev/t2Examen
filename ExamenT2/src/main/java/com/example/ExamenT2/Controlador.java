/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.ExamenT2;

import java.util.ArrayList;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author mike
 */
@Controller
public class Controlador {
   ArrayList<Servicios> listaservicio = new ArrayList();
   ArrayList<Servicios> listaatencion = new ArrayList();
   /* PAGINA PRINCIPAL*/
    @GetMapping("/") 
    public String Formulario() {
        return "index"; 
    } 
    
    @GetMapping("/regS") 
    public String vistaRegistrarServicios() {
        return "RegistrarServicios"; 
    } 
    
     @GetMapping("/servicios")
    public String Listadodeservicios(Model model) {
        model.addAttribute("Servicios", listaservicio);

        return "ListarServicio"; 
    }

    
    /*CRUD SERVICIOS*/
    @PostMapping("/registrarservicio") 
    public String Registrarservicio(
            @RequestParam("nom") String nom,
            @RequestParam("pre") String pre,
            Model model) {
        Servicios s = new Servicios();
        s.setNombre(nom);
        s.setPrecio(pre);
        listaservicio.add(s);

        model.addAttribute("Servicios", listaservicio);

        return "ListarServicio"; 
    }

   

    @GetMapping("/eliminarservicios")
    public String Eliminarservicios(@RequestParam("id") int id, Model model) {
        for (int i = 0; i < listaservicio.size(); i++) {

            if (i == id - 1) {

                listaservicio.remove(i);
            }
        }

        return Listadodeservicios(model);
    }

    @PostMapping("/actualizarservicios") // http://localhost/actualizar
    public String Actualizarservicios(@RequestParam("id") int id,
            @RequestParam("nom") String nom,
            @RequestParam("pre") String pre,
            Model model) {
        for (int i = 0; i < listaservicio.size(); i++) {

            if (i == id - 1) {
                listaservicio.get(i).setNombre(nom);
                listaservicio.get(i).setPrecio(pre);
               
            }
        }
        return Listadodeservicios(model);
    }

    @PostMapping("/buscarservicios") //http://localhost/buscar
    public String Buscarservicios(@RequestParam("dato") String dato, Model model) {
        ArrayList<Servicios> lista = new ArrayList();

        for (int i = 0; i < listaservicio.size(); i++) {
            String id = String.valueOf(i + 1);
            String nombre = listaservicio.get(i).getNombre();
            String precio = listaservicio.get(i).getPrecio();
 
            if(dato.equals(id)|| dato.equals(nombre) ){
                Servicios s = new Servicios();
                s.setNombre(nombre);
                s.setPrecio(precio);
      

                lista.add(s);
            }else
            {
                Servicios s = new Servicios();
                s.setNombre("");
                s.setPrecio("");
                
   
                lista.add(s);
            }
 
        }
            model.addAttribute("servicios", lista);
            return "ListarServicio";
        }
    

    
    /*CRUD ATENCION*/
    @GetMapping("/atencion")
    public String ListaAtencion(Model model) {
        model.addAttribute("Atenciones", listaatencion);

        return "ListarAtencion"; 
    }
        @PostMapping("/actualizaratencion") // http://localhost/actualizar
    public String ActualizarAtencion(@RequestParam("id") int id,
            @RequestParam("nom") String nom,
            @RequestParam("pre") String pre,
            Model model) {
        for (int i = 0; i < listaservicio.size(); i++) {

            if (i == id - 1) {
                listaservicio.get(i).setNombre(nom);
                listaservicio.get(i).setPrecio(pre);
               
            }
        }
        return Listadodeservicios(model);
    }
    /*REPORTES*/
 
}
