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
   ArrayList<Atencion> listaatencion = new ArrayList();
   /* PAGINA PRINCIPAL*/
    @GetMapping("/") 
    public String Formulario() {
        return "index"; 
    } 
    
 
    /*CRUD SERVICIOS*/
    
    
     @GetMapping("/servicios")
    public String Listadodeservicios(Model model) {
        model.addAttribute("Servicios", listaservicio);

        return "ListarServicio"; 
    }
    
    @PostMapping("/registrarservicio") 
    public String Registrarservicio(
            @RequestParam("nom") String nom,
            @RequestParam("pre") String pre,
            Model model) {
        Servicios s = new Servicios();
        s.setNombre(nom);
        s.setPrecio(Double.parseDouble(pre));
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
    public String Actualizarservicios(@RequestParam("id1") int id,
            @RequestParam("nom1") String nom,
            @RequestParam("pre1") String pre,
            Model model) {
        for (int i = 0; i < listaservicio.size(); i++) {

            if (i == id - 1) {
                listaservicio.get(i).setNombre(nom);
                listaservicio.get(i).setPrecio(Double.parseDouble(pre));
               
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
            Double precio = listaservicio.get(i).getPrecio();
 
            if(dato.equals(id)|| dato.equals(nombre) || dato.equals(String.valueOf(precio))){
                Servicios s = new Servicios();
                s.setNombre(nombre);
                s.setPrecio(precio);
      

                lista.add(s);
            }else
            {
                Servicios s = new Servicios();
                s.setNombre("");
                s.setPrecio(0.0);
                
   
                lista.add(s);
            }
 
        }
            model.addAttribute("Servicios", lista);
            return "ListarServicio";
        }
    

    
    /*CRUD ATENCION*/
    @GetMapping("/atencion")
    public String ListaAtencion(Model modelo) {
        modelo.addAttribute("Atenciones", listaatencion);

        return "ListarAtencion"; 
    }
    
    @PostMapping("/registraratencion") 
    public String RegistrarAtencion(
            @RequestParam("masc") String masc,
            @RequestParam("ser") String ser,
            @RequestParam("prec2") String prec2,
            @RequestParam("igv") String igv,
            @RequestParam("total") String total,
            Model modelo) {
        Atencion a = new Atencion();
        a.setNombreMascota(masc);
        a.setServicio(ser);
        a.setPrecio(Double.parseDouble(prec2));
        a.setIgv(Double.parseDouble(igv));
        a.setTotal(Double.parseDouble(total));
        
        listaatencion.add(a);

        modelo.addAttribute("Servicios", listaatencion);

        return "ListarAtencion"; 
    }
   
    @GetMapping("/eliminarAtencion")
    public String EliminarAtencion(@RequestParam("ids") int id, Model modelo) {
        for (int i = 0; i < listaatencion.size(); i++) {

            if (i == id - 1) {

                listaatencion.remove(i);
            }
        }

        return ListaAtencion(modelo);
    }
    /*REPORTES*/
 
}
