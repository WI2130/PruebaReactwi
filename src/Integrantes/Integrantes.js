
import'./Integrantes.css'

import'animate.css';

import WOW from 'wowjs';

import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (

        <>
            <div className="row my-5 justify-content-center " >
                <div className="col-12 col-md-4 zoom " >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/cantante%20brian.webp?alt=media&token=f2cfbe02-8b4f-49f7-bbfa-84a36d4de246" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>

                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__fadeInRight ' >

                    <h2> Brian johanson </h2>
                    <h3> Cantante </h3>

                </div>

            </div>
            
            <div className="row mt-2" >
                <div className="col-12" >

                    <div className="collapse " id="collapseExample">

                        <div className="card card-body  ">
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>

                    </div>


                </div>

            </div>

            <div className="row my-5 justify-content-center " >
                

                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated  animate__fadeInLeft' >

                    <h2> Angus young </h2>
                    <h3> Guitarrista </h3>

                </div>

                <div className="col-12 col-md-4 zoom " >
                    <img src="https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/angus.jpg?alt=media&token=ba7e55f9-b026-4cce-8465-6dff08016e8f " alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>

            </div>
            
            <div className="row mt-2" >
                <div className="col-12" >

                    <div className="collapse " id="collapseExample">

                        <div className="card card-body">
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}