import '../assets/page.css'

function Footer() {

    return (
        <>
            <footer className="container-fluid bg-footer">
                <div className="container">
                    <p>Russel Cuevas
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#me">Home</a> |
                        <a href="#about"> About Me</a> |
                        <a href="#projects"> Projects</a> |

                    </p><br />
                    <p>
                        <a href="https://www.facebook.com/profile.php?id=100086200148075" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</a> |
                        <a href="https://www.instagram.com/httpruss_/" target="_blank"> <i className="fa-brands fa-instagram"></i> Instagram</a> |
                        <a href="https://www.facebook.com/profile.php?id=100086200148075" target="_blank"> <i class="fa-brands fa-x-twitter"></i> Twitter</a> |
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer