import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../assets/page.css'

function Navbar() {
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle="collapse" data-target="#myNavbar">
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a data-aos="fade-right" data-aos-duration="1000" href="" className='navbar-brand'>Russel Cuevas</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul data-aos="fade-left" data-aos-duration="1000" className="nav navbar-nav navbar-right">
                            <li><a href="#me">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;