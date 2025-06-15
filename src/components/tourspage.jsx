import "../css/tours.css"
import HeroImage from "../assets/images/hero-image.jpg"
import { Link } from "react-router-dom";
import MasaaiMara from "../assets/images/masai-mara.jpg";
import Amboseli from "../assets/images/amboseli park.jpg";
import Samburu from "../assets/images/Samburu-National-Park.jpg";
import LakeNakuru from "../assets/images/Lake-Nakuru-National-Park-.jpg";
import TsavoEast from "../assets/images/Tsavo-East-National-Park.jpg";
import TsavoWest from "../assets/images/Tsavo West National Park.jpg";
import Serengeti from "../assets/images/Serengeti-National-Park.jpg";



const ToursPage = () =>{
    return (
        <div className="tours-section">
            <div className="hero-section">
                <img src={HeroImage} alt="hero section image"/>
                <p className="hero-text">
                    <Link to="">HOME -</Link>
                    <span>TOURS</span>
                </p>
                
            </div>

            <div className="tours">
                <h1>TOURS OFFERED BY FALCON TRAVEL AND TOURS</h1>
                <div className="tours-card-section">
                    <div className="tour-card">
                        <img src={MasaaiMara} alt="Falcon Travel and Tours in Masaai Mara National Park"/>
                        <div className="tour-body">
                            <h2>Masaai Mara National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={Amboseli} alt="Falcon Travel and Tours in Amboseli National Park"/>
                        <div className="tour-body">
                            <h2>Amboseli National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={Samburu} alt="Falcon Travel and Tours in Samburu Game Reserve"/>
                        <div className="tour-body">
                            <h2>Samburu Game reserve</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={LakeNakuru} alt="Falcon Travel and Tours in Lake Nakuru National Park"/>
                        <div className="tour-body">
                            <h2>Lake Nakuru National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={TsavoEast} alt="Falcon Travel and Tours in Tsavo East National Park"/>
                        <div className="tour-body">
                            <h2>Tsavo East National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={TsavoWest} alt="Falcon Travel and Tours in Tsavo West National Park"/>
                        <div className="tour-body">
                            <h2>Tsavo West National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={Serengeti} alt="Falcon Travel and Tours in Serengeti National Park"/>
                        <div className="tour-body">
                            <h2>Serengeti National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={MasaaiMara} alt="Falcon Travel and Tours in Masaai Mara National Park"/>
                        <div className="tour-body">
                            <h2>Hells Gate National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tour-card">
                        <img src={MasaaiMara} alt="Falcon Travel and Tours in Masaai Mara National Park"/>
                        <div className="tour-body">
                            <h2>Meru National Park</h2>
                            <p>Read More....</p>
                            <div className="line"></div>
                            <div className="tour-price">
                                <p>Starting from Ksh 0/=</p>
                                <button>
                                    <Link to="/contact">BOOK A TRIP</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

    )
}

export default ToursPage;