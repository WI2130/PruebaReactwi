export function Carrusel() {

    return (

         <>
            <div className="bg-black">
                <div className="container justify-content-center col-md-6 mt-4 " >

                    <div className="row" >

                        <div className="col-12 ">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/agrupacion.jpg?alt=media&token=6170efaf-2beb-4a4b-bba3-7b0f7b593661" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/agrupacion1.jpg?alt=media&token=342b5dc1-491b-4656-ba8d-04a8890f52ab" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/pruebareactwi.appspot.com/o/agrupacion3.jpg?alt=media&token=1ac5e93a-0f25-469a-994d-4af7b39c37f5" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>

    )

}