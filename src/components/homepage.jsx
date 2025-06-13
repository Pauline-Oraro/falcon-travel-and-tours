
import Falcon from "../assets/images/falcon-travel-and-tours.jpg";
import Safari from "../assets/images/falcon-travel-and-tours-on-safari.jpg"
import MaasaiMara from "../assets/images/masai-mara.jpg";
import Amboseli from "../assets/images/amboseli park.jpg";
import Samburu from "../assets/images/Samburu-National-Park.jpg";
import Serengeti from "../assets/images/Serengeti-National-Park.jpg";
import Wildlife from "../assets/images/wildlife8.jpg";
import BlogOne from "../assets/images/blog1.jpg";
import BlogTwo from "../assets/images/blog2.jpg";
import WildlifeThree from "../assets/images/wildlife3.jpg";
import WildlifeFour from "../assets/images/wildlife4.jpg";
import WildlifeFive from "../assets/images/wildlife5.jpg";
import WildlifeSix from "../assets/images/wildlife6.jpg";
import WildlifeSeven from "../assets/images/wildlife7.jpg";

const HomePage = () => {
    return (
        <div className="home-section">
            <section className="home-hero-section">
                <img src={Falcon} alt="Falcon travel and tours"/>
                <p>Explore the wonders of Kenya and Tanzania with us! We’ll take you to unforgettable places without the hassle. Let Falcon Travel and Tours turn your dream journey into reality.</p>
            </section>

            <section className="home-section-2">
                <img src={Safari} alt="Falcon travel and tours on safari"/>
                <div className="section-statement">
                    <h2>Who Are We?</h2>
                    <p>At Falcon Travel and Tours, we are your trusted partner in creating unforgettable travel experiences across the landscapes of Kenya and Tanzania. We specialize in creating tours that immerse you in iconic wildlife and stunning natural wonders of East Africa. With a deep passion for exploration, we pride ourselves on delivering personalized service, seamless travel planning, and authentic adventures that create lasting memories. With years of experience  and a deep love for exploration, Falcon Travel and Tours is committed to creating journeys that leave lasting memories. </p>
                </div>
            </section>

            <section className="home-destination-section">
                <h2>Top Destinations for Unforgettable Adventures</h2>
                <p>Explore the most sought-after locations in Kenya and Tanzania, handpicked for extraordinary experiences.</p>
                <div className="home-destinations">
                    <div className="destination-image">
                        <img src={MaasaiMara} alt="Falcon travel and tours in Maasai Mara National Park"/>
                        <p>Masaai Mara National Park.</p>
                    </div>
                    <div className="destination-image">
                        <img src={Amboseli} alt="Falcon travel and tours in Amboseli National Park"/>
                        <p>Amboseli National Park.</p>
                    </div>
                    <div className="destination-image">
                        <img src={Samburu} alt="Falcon travel and tours in Samburu Game Reserve"/>
                        <p>Samburu Game Reserve.</p>
                    </div>
                    <div className="destination-image">
                        <img src={Serengeti} alt="Falcon travel and tours in Serengeti National Park"/>
                        <p>Serengeti National Park</p>
                    </div>
                </div>    

            </section>

            <section className="faq">
                <h2>Why You Should Choose Our Travel Services.</h2>
                
                <div className="faq-section">
                    <img src={Wildlife} alt="Falcon Travel and Tours"/>
                <div className="faqs">
                    <h3>Frequently Asked Questions</h3>
                    <div className="questions">
                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionOne"
                        
                        />
                        <label htmlFor="questionOne" className="tab-label">How do I book a trip with your agency?</label>
                        <div className="answerTab">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium provident quos expedita.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionTwo"
                        
                        />
                        <label htmlFor="questionTwo" className="tab-label">What Payment Methods Do You Accept?</label>
                        <div className="answerTab">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium provident quos expedita.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionThree"
                        
                        />
                        <label htmlFor="questionThree" className="tab-label">What Is Your Cancellation Policy?</label>
                        <div className="answerTab">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium provident quos expedita.</p>
                        </div>
                    </div>

                    <div className="questionTab">
                        <input 
                        type="checkbox"
                        id="questionFour"
                        
                        />
                        <label htmlFor="questionFour" className="tab-label">Can I Make Changes My Reservation After Booking?</label>
                        <div className="answerTab">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium provident quos expedita.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
            </section>

            <section className="home-section-3">
                <h1>Why Book Your Tour</h1>
                <p>At Falcon Travel and Tours, we are your trusted partner in creating unforgettable travel experiences across the landscapes of Kenya and Tanzania. </p>

            <div className="about-section-5">
                <div className="about-reasons">
                <div className="reasons">
                    <div className="reasons-section">
                        <div className="reasons-card">
                            <h3>Expert Local Guides.</h3>
                            
                        </div>
                        <div className="reasons-card">
                            <h3>Seamless Travel Planning.</h3>
                            
                        </div>
                    </div>
                    <div className="reasons-section-2">
                        <div className="reasons-card">
                            <h3>Safety and Comfort Guaranteed.</h3>
                            
                        </div>
                        <div className="reasons-card">
                            <h3>Transparent Pricing</h3>
                            
                        </div>
                    </div>  
                </div>

            
                <p>At Falcon Travel and Tours, we excel in providing seamless travel arrangements tailored to your needs. From personalized itineraries to hassle-free bookings, we ensure every detail is covered for a smooth and memorable journey. With expert guidance and 24/7 support, your travel experience is in the best hands. Let us take you there!</p>
                </div>
                
            </div>
            </section>

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

            <section className="gallery">
                <img src={WildlifeThree} alt="Falcon Travel and Tours"/>
                <img src={WildlifeFour} alt="Falcon Travel and Tours"/>
                <img src={WildlifeFive} alt="Falcon Travel and Tours"/>
                <img src={WildlifeSix} alt="Falcon Travel and Tours"/>
                <img src={WildlifeSeven} alt="Falcon Travel and Tours"/>
            </section>
        </div>
    )
};

export default HomePage;