import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className="header">
            <span>
                <Link to="/">
                    <img src="/Falcon-travel-and-tours-logo.png" className="imgHeader"/>
                </Link>
            </span>
            <input className="side-menu" type="checkbox" id="side-menu" name="menu" />
            <label htmlFor="side-menu" className="hamb">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/about">ABOUT</Link> </li>
                    <li> <Link to="/tours">TOURS</Link> </li>
                    <li> <Link to="/blogs">BLOGS</Link> </li>
                    <li> <Link to="/contact">CONTACT</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;