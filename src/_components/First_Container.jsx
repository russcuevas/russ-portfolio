import React, { useEffect } from 'react';
import '../assets/page.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import russImage from '../assets/images/russ.jpg'
import caliImage from '../assets/images/school.jpg';
import lpcaImage from '../assets/images/lpca.png';
import bcasImage from '../assets/images/bcas.png';


function First_Container() {
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <>
            <div className="container-fluid bg-1 text-center" id="me">
                <br /><br /><br /> <br />
                <h1 className="margin" data-aos="fade-right" data-aos-duration="1000">_ Hi, I am Russel :0 </h1>
                <img data-aos="fade-up" data-aos-duration="1000" className='img-responsive img-circle margin' src={russImage} alt="Russel Vincent Cuevas" />
                <p data-aos="fade-up" data-aos-duration="1000"> Personal Portfolio </p> <br />
                <button data-aos="fade-up" data-aos-duration="1000" onClick={() => {
                    const aboutElement = document.getElementById('about');
                    if (aboutElement) {
                        aboutElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>
                    <div class="left"></div>
                    ABOUT ME ↓
                    <div class="right"></div>
                </button>
                <br /><br />
                <h3 data-aos="fade-up" data-aos-duration="1000">Education : </h3>
                <div className="row">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
                        href="" target="_blank">
                        <center>
                            <img className='img-responsive margin' src={caliImage} alt="Calingatan Elementary School" />
                            <span>Calingatan Elementary School <br /> (Elementary) </span>
                        </center>
                    </a></div>
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
                        href="" target="_blank">
                        <center>
                            <img className='img-responsive margin' src={lpcaImage} alt="La Purisima Concepcion Academy" />
                            <span>La Purisima Concepcion Academy <br /> (High School)</span>
                        </center>
                    </a></div>
                    <div data-aos="zoom-in-up" data-aos-duration="3000" className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
                        href="" target="_blank">
                        <center>
                            <img className='img-responsive margin' src={bcasImage} alt="Batangas College of Arts & Sciences" />
                            <span>Batangas College of Arts & Sciences <br /> (Present)</span>
                        </center>
                    </a></div>
                </div>
            </div >
        </>
    )
}

export default First_Container
