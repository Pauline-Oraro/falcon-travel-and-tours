import HeroImage from "../assets/images/hero-image.jpg";
import {Link} from "react-router-dom";
import "../css/contact.css";

const ContactPage =() =>{
    return(
        <div className="contact">

            <div className="hero-section">
                <img src={HeroImage} alt="hero section image"/>
                <p className="hero-text">
                    <Link to="">HOME - </Link>
                    <span>CONTACT</span>
                </p>
                
            </div>

            <div className="contact-section">
                <div className="contact-fieldset">
                    <fieldset>
                        <legend>Opening Hours</legend>
                        <label>8.00 am -10.00pm</label>
                        
                    </fieldset>

                    <fieldset>
                        <legend>Location</legend>
                        <label>Nairobi</label>
                        
                    </fieldset>

                    <fieldset>
                        <legend>Email</legend>
                        <label>samwuelkiruga20@gmail.com</label>
                        
                    </fieldset>

                    <fieldset>
                        <legend>PO.BOX</legend>
                        <label>P.O BOX 12591-00400 NAIROBI</label>
                        
                    </fieldset>
                </div>

                <div className="form">
                    <h2>Reach Us Anytime</h2>
                    
                        <label htmlFor="name">NAME:</label>
                    <input  type="text" 
			                id="name" 
			                 />
                        
                        <label htmlFor="phone-number">PHONE NUMBER:</label>
                    <input  type="number" 
			                id="phone-number" 
			                 />

                        <label htmlFor="email">EMAIL:</label>
                    <input  type="email" 
			                id="email" 
			                 />

                        <label htmlFor="message">MESSAGE:</label>
                        <textarea id="message"></textarea>
                    
                   
                </div>
            </div>
        </div>
    )
};

export default ContactPage;