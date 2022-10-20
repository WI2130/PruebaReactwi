import { Footer } from "../Footer/Footer.js"

export function Musicos(params) {

    //Arreglo De Objetos Es Formato Comun Al Consumir Un Api

    let Musicos = [
        {
            nombre: "Brian johanson",
            rol: "Cantante",
            url: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/cantante%20brian.webp?alt=media&token=f2cfbe02-8b4f-49f7-bbfa-84a36d4de246"

        },
        {
            nombre: "Angus young",
            rol: "Guitarrista",
            url: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/angus.jpg?alt=media&token=ba7e55f9-b026-4cce-8465-6dff08016e8f"

        }
    ]

    let conciertosMemorables = [

        {
            fecha: "El 4 De Febrero De 2015",
            pais: "ESpaña",
            descripcion: "Comienzo del concierto de AC/DC en la gira Rock or Bust, en el estadio Vicente Calderón en 2015",
            foto: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/concierto1.jpg?alt=media&token=a073494f-6961-4317-9add-836fb7ca7e3e"
        },
        {
            fecha: "EL 12 De Agosto De 2018",
            pais: "Alemania",
            descripcion: "La banda australiana AC/DC se presentó el jueves 25 de junio en el estadio Olímpico de Berlín, en Alemania, en el marco de la gira europea que actualmente realiza.",
            foto: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/concierto3.jpg?alt=media&token=9a75d92a-0038-4003-9392-bc67da8171e9"
        },
        {
            fecha: " El 27 De Febrero De 2018",
            pais:"Lisboa",
            descripcion: " A la vista de lo que la historia del rock nos ha enseñado, no es una novedad que AC/DC tenga que buscar un sustituto a los mandos del micrófono. Pero lo que sucedió en 2016, cuando Axl Rose (Guns N' R﻿oses) fue su vocalista durante una gira, es un caso digno de estudio ©copyright los40.com",
            foto: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/concierto2.jpg?alt=media&token=8f0b40e5-ce84-4ecd-9cfe-cb46b894fc7b"
        },
        {
            fecha: "El 2 De Octubre De 2019",
            pais: "italia",
            descripcion: "AC/DC está de vuelta, justo cuando el mundo más los necesita. Seguramente es la banda de rock más querida, esa que logra congregar a abuelos con nietos, unos clásicos que garantizan agotar las entradas de los estadios en horas. Cuando empezaron, a mediados de los setenta, escuchaban a los australianos los malotes; hoy, se disfrutan en familia",
            foto: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/concierto4.jpg?alt=media&token=3f1641f7-bffd-41fd-955f-dbb909cbf6ec"
        },
        {
            fecha: "15 de marzo de 2013",
            pais: "España",
            descripcion: "El guitarrista de AC/DC Angus Young, en un concierto en Barcelona. A lo largo del espectáculo, va quitándose ropa hasta quedarse en pantalón corto.",
            foto: "https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/concierto5.jpg?alt=media&token=77a81c1c-80d9-4b35-8679-03075e259f55"
        }


    ]

    //Mapeando Un Arreglo Para Hacer Render
    return (
        //let hola="Brandon" De Esta Forma NO Hay Que Interpolar

        //Siempre De Map Va Una Funcion Anonima o Funcion Flecha
        //Un .map Siempre Te Return algo
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3" >

                {
                    Musicos.map(function (Musico) {
                        return (
                            <>
                                <div className="col mt-4 " >
                                    <div className="card h-100" >

                                        <img src={Musico.url} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {Musico.nombre}  </h3>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>


            <div className="row">
                {
                    conciertosMemorables.map(function (concierto) {
                        return (
                            <>
                                <div className="col">
                                    <div className="card h-100" >

                                        <img src={concierto.foto} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {concierto.fecha}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.pais}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.descripcion}  </h3>


                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <Footer />
        </>



    )

}

