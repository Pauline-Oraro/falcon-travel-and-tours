import {Link} from "react-router-dom";
import "../css/about.css";
import HeroImage from "../assets/images/hero-image.jpg";
import Wild from "../assets/images/falcon-travel-and-tours-in-the-wild.jpg"
import MasaaiMara from "../assets/images/masai-mara.jpg";
import Park from "../assets/images/falcon-travel-and-tours-in-the-park.jpg";
import BlogOne from "../assets/images/blog1.jpg";
import BlogTwo from "../assets/images/blog2.jpg";

const AboutPage = () =>{
    return (
        <div className="about-section">

            <div className="hero-section">
                <img src={HeroImage} alt="hero section image"/>
                <p className="hero-text">
                    <Link to="">HOME -</Link>
                    <span>ABOUT</span> 
                </p>
                
            </div>

            <div className="about-section-2">
                <div className="about-statement">
                <h2>Welcome to Falcon Travel and Tours: Your Gateway to Kenya and Tanzania.</h2>
                <p>At Falcon Travel and Tours, we specialize in creating unforgettable travel experiences across the landscapes of Kenya and Tanzania. With years of experience in the tourism industry, we pride ourselves on immersive travel experiences that showcase the best of Kenya and Tanzania. We are a premier tour and travel company specializing in exceptional travel experiences across the breathtaking landscapes of Kenya and Tanzania. Falcon Travel & Tours was founded by a team of travel enthusiasts who share a love for Africa&apos;s rich heritage and natural beauty.</p>
                </div>
                <img src={Wild} alt="Falcon Travel and tours in the wild" />
            </div>

            <div className="about-section-3"></div>

            <div className="about-section-4">
                <h2>Why Falcon Travel and Tours Is The Best</h2>
                <div className="about-best">
                    <div className="best">
                        <h3>Worldwide Coverage</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                    <div className="best">
                        <h3>Competitive Pricing</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                    <div className="best">
                        <h3>Fast Booking</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                    <div className="best">
                        <h3>Guided Tours</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                    <div className="best">
                        <h3>Best Support 24/7</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                    <div className="best">
                        <h3>Ultimate Flexibility</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat dicta ad explicabo quisquam voluptatum distinctio eaque!</p>
                    </div>
                </div>
            </div>

            <div className="popular-section">
                <div className="popular-card">
                    <img src={MasaaiMara} alt="Falcon Travel and Tours in Maasai Mara" />
                    <div className="popular-body">
                        <h3>POPULAR</h3>
                        <h2>Masaai Mara National Park</h2>
                        
                        <div className="popular-price">
                            
                            
                            <button>
                                <Link to="/contact">Book a trip</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-destinations">
                <img src={Park} alt="Falcon Travel and tours in the park"/>
                <div className="destinations">
                    <h2>Explore Our Destinations</h2>
                    <h3>KENYA</h3>
                    <p>Experience the breathtaking Great Migration in the Maasai Mara, marvel at the iconic views of Mount Kilimanjaro in Amboseli, witness the stunning flamingo-filled shores of Lake Nakuru, and explore the vast wilderness of Tsavo East and West National Parks.</p>
                    <h3>TANZANIA</h3>
                    <p>Immerse yourself in the endless plains of the Serengeti, home to abundant wildlife and the world-famous Great Migration.</p>
                    <button>
                        <Link to="/contact">Check availability</Link>
                    </button>
                </div>
            </div>

            <div className="about-section-5">
                <h2>Why Travel With Falcon Travel and Tours </h2>
                <div className="about-reasons">
                    <p>When it comes to exploring the wonders of Kenya and Tanzania, you deserve a travel partner who understands your needs and ensures every detail of your journey is flawless. At Falcon Tours & Safaris, we pride ourselves on delivering exceptional experiences that are as unique as you are. Here’s why we’re the perfect choice for your East African adventure:</p>

                <div className="reasons">
                    <div className="reasons-section">
                        <div className="reasons-card">
                            <h3>Expert Local Guides.</h3>
                            
                        </div>
                        <div className="reasons-card">
                            <h3>Seamless Travel Planning.</h3>
                            
                        </div>
                        <div className="reasons-card">
                            <h3>Safety and Comfort Guaranteed.</h3>
                            
                        </div>
                        <div className="reasons-card">
                            <h3>Transparent Pricing</h3>
                            
                        </div>
                    </div>
                     
                </div>
                </div>
                
            </div>

            <div className="about-blogs">
                <h1>Travel Article Enthusiast</h1>
                <div className="blog-card">
                    <div className="blog-card-body">
                        <img src={BlogOne} />
                        <h3>Seasonal Safari Guide: When to Visit Kenya and Tanzania for the Best Wildlife Experiences</h3>
                        <p className="link">View More....</p>
                    </div>

                    <div className="blog-card-body">
                        <img src={BlogTwo} />
                        <h3>Top 10 Must-Visit Safari Parks in Kenya and Tanzania</h3>
                        <p className="link">View More....</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;