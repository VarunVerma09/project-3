import React from 'react';
import img1 from '../assets/slide/1.jpg'
import img2 from '../assets/slide/2.jpg'
import img3 from '../assets/slide/3.webp'

const Crousel = () => {
    return (
        <>
            <section>
                <div id="amulCarousel" className="carousel slide" data-bs-ride="carousel">

                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#amulCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#amulCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#amulCarousel" data-bs-slide-to="2"></button>
                    </div>

                    {/* Slides */}
                    <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="Chocolate 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fs-2 fw-bold">Balls Section</h5>
                                <p className="fs-5">We Provide The Best Quality Balls</p>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="Chocolate 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fs-2 fw-bold">Bats Section</h5>
                                <p className="fs-5">We Provide The Best Quality Bats</p>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="Chocolate 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fs-2 fw-bold">Cricket Kits</h5>
                                <p className="fs-5">We Provide The Best Quality</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#amulCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#amulCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Crousel;
