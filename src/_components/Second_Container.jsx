import '../assets/page.css';

function Second_Container() {

    return (
        <>
            <div className="container-fluid bg-3" id="about">
                <br />
                <div className="container text-center">
                    <h1>About Me</h1>

                    <br /><br />
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <h2 className="margin text-left">Future programmer</h2>
                            {/* <h4 className="text-left">_ Hi </h4> */}
                            <p className="text-left">
                                <span className='sub-title'>_ Hi! </span>Im a freelancer
                            </p>
                            <br />
                            <h4>Technology Stack</h4>
                            <blockquote className="text-left">
                                <ul className='sub-title'>
                                    <li>PHP (Laravel)</li>
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
                    <h1 className="margin">Projects</h1><br />
                    <div className="row margin">
                        <div className="col-sm-4 suc">
                            <img className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi ullam</small>
                        </div>
                        <div className="col-sm-4 suc">
                            <img className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi ullam</small>
                        </div>
                        <div className="col-sm-4 suc">
                            <img className='img-responsive' src="/images/russ.jpg" alt="" />
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque commodi ullam</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second_Container;