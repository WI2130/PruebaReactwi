import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState, useEffect } from "react"



export function Albumes() {

    //Declarando Mi Primer useState
    const[canciones,setCanciones]=useState(null)
    //Esto Es Una Variable = Metodo Global En React

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpoty()
        .then(function(respuesta) {
    
            setCanciones(respuesta.tracks)
            setCarga(false)
            
        })
        console.log(canciones)

    },[])

    if (carga==true) {
        return(
            <>
            <h1>estoy cargando</h1>
            </>
        )
        
    } else {
        return(

            <>
                <div className="row">
                    {
                        canciones.map(cancion=>{
                            return(
                                <>
                                <div className="col-3 h3 p-2">
                                    <div className="card h-100 bg-danger ">
                                        <audio controls src ={cancion.preview_url} ></audio>
                                        <img src={cancion.album.images[0].url} ></img>

                                    </div>

                                </div>
                                </>
                            )
                        })
                    }

                </div>
            </>
    
        )
    }

    


   
    
}