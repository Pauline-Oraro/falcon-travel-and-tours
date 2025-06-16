import "../css/blog.css"
import HeroImage from "../assets/images/hero-image.jpg";
import {Link} from "react-router-dom";
import BlogOne from "../assets/images/blog1.jpg";
import BlogTwo from "../assets/images/blog2.jpg";
import BlogThree from "../assets/images/blog3.jpg";
import BlogFour from "../assets/images/blog4.jpg";

const BlogPage = () =>{
    return(
        <div>

            <div className="hero-section">
                <img src={HeroImage} alt="hero section image"/>
                <p className="hero-text">
                    <Link to="">HOME - </Link>
                    <span>BLOGS</span>
                </p>
                
            </div>

            <div className="blogs-section">
                <div className="blog-body">
                    <img src={BlogOne} alt="Seasonal Safari Guide: When to Visit Kenya and Tanzania for the Best Wildlife Experiences"/>
                    <div className="blog-statements">
                        <h2>Seasonal Safari Guide: When to Visit Kenya and Tanzania for the Best Wildlife Experiences</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                        <p className="link">VIEW POST</p>
                    </div>
                    
                </div>

                <div className="blog-body">
                    <img src={BlogTwo} alt="Top 10 Must-Visit Safari Parks in Kenya and Tanzania" />
                    <div className="blog-statements">
                        <h2>Top 10 Must-Visit Safari Parks in Kenya and Tanzania</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                    <p className="link">VIEW POST</p>
                    </div>
                    
                </div>

                <div className="blog-body">
                    <img src={BlogThree} alt="The Big Five Safari: Where to Spot Them in Kenya and Tanzania" />
                    <div className="blog-statements">
                        <h2>The Big Five Safari: Where to Spot Them in Kenya and Tanzania</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                    <p className="link">VIEW POST</p>
                    </div>
                    
                </div>

                <div className="blog-body">
                    <img src={BlogFour} alt="Packing for an African Safari: Essentials for Kenya and Tanzania" />
                    <div className="blog-statements">
                        <h2>Packing for an African Safari: Essentials for Kenya and Tanzania</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                    <p className="link">VIEW POST</p>
                    </div>
                    
                </div>

                <div className="blog-body">
                    <img src={BlogOne} alt="Client Spotlight: Their Unforgettable Safari Adventure" />
                    <div className="blog-statements">
                        <h2>Client Spotlight: Their Unforgettable Safari Adventure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                    <p className="link">VIEW POST</p>
                    </div>
                    
                </div>

                <div className="blog-body">
                    <img src={BlogOne} alt="Life-Changing Moments on Safari: Stories from the Wild" />
                    <div className="blog-statements">
                        <h2>Life-Changing Moments on Safari: Stories from the Wild</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aliquid cupiditate modi veritatis</p>
                    <p className="link">VIEW POST</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default BlogPage;