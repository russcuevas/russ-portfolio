import '../assets/page.css';

import russImage from '../assets/images/russ.jpg'
import caliImage from '../assets/images/school.jpg';
import lpcaImage from '../assets/images/lpca.png';
import bcasImage from '../assets/images/bcas.png';


function First_Container() {
    return (
        <>
            <div className="container-fluid bg-1 text-center" id="me">
                <br /><br /><br /> <br />
                <h1 className="margin">_ Hi, I am Russel :0 </h1>
                <img className='img-responsive img-circle margin' src={russImage} alt="Russel Vincent Cuevas" />
                <p> Personal Portfolio </p> <br />
                <button onClick={() => {
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
                <h3>Education : </h3>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
                        href="" target="_blank">
                        <center>
                            <img className='img-responsive margin' src={caliImage} alt="Calingatan Elementary School" />
                            <span>Calingatan Elementary School <br /> (Elementary) </span>
                        </center>
                    </a></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
                        href="" target="_blank">
                        <center>
                            <img className='img-responsive margin' src={lpcaImage} alt="La Purisima Concepcion Academy" />
                            <span>La Purisima Concepcion Academy <br /> (High School)</span>
                        </center>
                    </a></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br /><a
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