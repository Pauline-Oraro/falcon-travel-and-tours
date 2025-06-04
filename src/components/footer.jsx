import {Link} from "react-router-dom";
import PhoneIcon from "../assets/svg/phone-call-svgrepo-com.svg";
import EmailIcon from "../assets/svg/email-1-svgrepo-com.svg";
import FacebookIcon from "../assets/svg/facebook-svgrepo-com.svg";

const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="footer-col">
            <img src="/Falcon-travel-and-tours-logo.png" className="imgHeader"/>
            <h1>Want To Take Tour Packages?</h1>
            <button className="footer-button">
                <Link to="/tours">Book a tour</Link>
            </button>
            </div>

            <div className="footer-col">
                <h2>Quick Links</h2>
                <ul className="footer-links">
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/about">ABOUT</Link> </li>
                    <li> <Link to="/tours">TOURS</Link> </li>
                    <li> <Link to="/blogs">BLOGS</Link> </li>
                    <li> <Link to="/contact">CONTACT</Link> </li>
                </ul>
            </div>

            <div className="footer-col">
                    <p className="footer-socials">
                        <img src={PhoneIcon} alt="Phone Icon" className="footer-icon"/>
                        <p>More Inquiry</p>
                    </p>
                    <p>+254 724858579</p>

                    <p className="footer-socials">
                        <img src={EmailIcon} alt="Email Icon" className="footer-icon"/>
                        <p>Send Email</p>
                    </p>
                    <p>samwuelkiruga20@gmail.com</p>

                    <p className="footer-socials">
                        <img src={EmailIcon} alt="Email Icon" className="footer-icon"/>
                        <p>P.O BOX</p>
                    </p>
                    <p>P.O BOX 12591-00400 NAIROBI</p>

 
                    <p className="footer-socials">
                        <img src={FacebookIcon} alt="Facebook Icon" className="footer-icon"/>
                        <p>Facebook</p>
                    </p>
                    <p>Facebook</p>
            </div>
        </div>
        
    </>
    )
}


export default Footer;