export function Carrusel() {

    return (

        <>
            <div className="container justify-content-center col-md-6 mt-4 " >

                <div className="row" >

                    <div className="col-12  ">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/zion_lennox.jpg?alt=media&token=7d6b88e9-7845-4efa-87ba-f7e4196fd682" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/Zion-y-Lennox-embriagame-premios-lo-nuestro-2016-tebanmusic-miami-entrevista-video-ipauta-sencillo3.jpg?alt=media&token=74ccc56a-28e7-4511-9dc4-c2e9a97baff0" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojitosbr.appspot.com/o/5e879a04012e3_zionlenox2.jpg?alt=media&token=f7df27cb-d845-4e4c-ba30-a4dff72c1cce" className="d-block w-100" alt="..." />
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



        </>

    )

}