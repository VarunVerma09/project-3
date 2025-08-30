import React from 'react';
import onepice from '../data/one';
import Crousel from '../custom/Crousel';
import img1 from '../assets/img/1img/1pc.jpg'
import img2 from '../assets/img/1img/2pc.jpg'
import img3 from '../assets/img/1img/3pc.jpg'
import img4 from '../assets/img/1img/4pc.jpg'
import img5 from '../assets/img/2img/cosco.jpg'
import img6 from '../assets/img/2img/lather.jpg'

const Home = () => {
    return (
        <>
            <Crousel />
            <h1 className='mt-3  py-3 px-5 '>Best Offer's</h1>
            <section className='grid bg-light'>
                <main className=''>

                    <div className='bg-light'><img src={img1} alt="" />
                        <main> <h3>1 Peace</h3></main>
                    </div>
                    <div className='bg-light'><img src={img2} alt="" />
                        <main><h3>2 Peace</h3></main>
                    </div>
                    <div className='bg-light'><img src={img3} alt="" />
                        <main><h3>3 Peace</h3></main>
                    </div>
                    <div className='bg-light'><img src={img4} alt="" />
                        <main><h3>4 Peace</h3></main>
                    </div>
                </main>
                <main>
                    <div><img src={img5} alt="" />
                        <section>
                            <h2>CoSco Bats</h2>
                            <p>A durable, lightweight, and waterproof plastic option, perfect for beginners and gully cricket.
                            </p> 
                            <a href="">Shop Now</a>
                        </section>
                    </div>
                    <div><img src={img6} alt="" />
                        <section>
                            <h2>Lather Bats</h2>
                            <p>The wood is strong and resilient, enabling it to handle the rapid pace of fast bowlers and maintain its shape over time.</p>
                            <a href="">Shop Now</a>
                        </section></div>

                </main>

                <main><div>
                    </div></main>


            </section>
        </>
    );
}

export default Home;
