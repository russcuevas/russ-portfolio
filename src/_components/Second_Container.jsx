import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../assets/page.css';

import bankSystem from '../assets/projects/banksystem.jpeg';
import foodSystem from '../assets/projects/foodordersystem.jpeg';
import carSystem from '../assets/projects/car-rental-system.jpeg';

function Second_Container() {
    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <>
            <div className="container-fluid bg-3" id="about">
                <br />
                <div className="container text-center">
                    <h1 data-aos="fade-down" data-aos-duration="3000">About Me</h1>

                    <br /><br />
                    <div className="row">
                        <div data-aos="fade-right" data-aos-duration="3000" className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <h1 id='contact'>Contact me </h1>
                            <br />
                            <h4 className='text-left'>Email : <a href="" id='contact-title'><span>russelcuevas0@gmail.com</span></a></h4>
                            <h4 className='text-left'>Phone number : <a href="" id='contact-title'><span>09495748302</span></a></h4>
                            <br />
                            <a href="">
                                <center>
                                    <a href="https://www.facebook.com/profile.php?id=100086200148075" target='_blank'><div className="Download"><i className="fa-brands fa-facebook-messenger"></i> <span>Messenger</span></div></a>
                                    <br />
                                    <a href="https://www.instagram.com/httpruss_/" target='_blank'><div className="Download"><i className="fa-brands fa-instagram"></i> <span>Instagram</span></div></a>
                                    <br />
                                    <a href="https://www.facebook.com/profile.php?id=100086200148075" target='_blank'><div className="Download"><i class="fa-brands fa-x-twitter"></i> <span>Twitter</span></div></a>
                                </center>
                            </a>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000" className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <h2 className="margin text-left">Future programmer</h2>
                            {/* <h4 className="text-left">_ Hi </h4> */}
                            <p className="text-left">
                                <span className='sub-title'>_ Hi! </span>Im a freelancer
                            </p>
                            <br />
                            <h4>Technology Stack</h4>
                            <blockquote className="text-left">
                                <ul className='sub-title'>
                                    <li>C++, C#, VB.NET (Windows Form, Console App)</li>
                                    <li>PHP (Laravel) - Web Development</li>
                                    <li>MySQL</li>
                                    <li>Javascript</li>
                                </ul>
                            </blockquote>
                            <br />
                            <h4>Offered </h4>
                            <blockquote className="text-left">
                                <ul className='sub-title'>
                                    <li>Assignments</li>
                                    <li>Activities</li>
                                    <li>Projects</li>
                                </ul>
                            </blockquote>

                        </div>
                    </div>
                </div>
            </div >

            <div className="container-fluid bg-2 text-center" id="projects">
                <br />
                <div className="container text-center">
                    <h1 data-aos="fade-down" data-aos-duration="3000" className="margin">Projects</h1><br />
                    <div className="row margin">
                        <div data-aos="fade-right" data-aos-duration="1000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="1000" className='img-responsive' style={{ height: '200px', margin: '70px 0 0 0' }} src={bankSystem} alt="" />
                            <small>Bank system - PHP Mysql Javascript</small>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="2000" className='img-responsive' style={{ height: '200px', width: '500px', margin: '70px 0 0 0' }} src={foodSystem} alt="" />
                            <small>Food order system - PHP Mysql Javascript</small>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="3000" className='img-responsive' style={{ height: '200px', width: '500px', margin: '70px 0 0 0' }} src={carSystem} alt="" />
                            <small>Car rental system - PHP Mysql Javascript</small>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="1000" className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Soon</small>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="2000" className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Soon</small>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000" className="col-sm-4 suc">
                            <img data-aos="zoom-in" data-aos-duration="3000" className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Soon</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second_Container;
