import logo from "../../assets/white-logo.png";
import bannerBg from "../../assets/banner-bg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
   <>
        <nav id="navBar">
        <img id="logoImage" src={logo} alt="Logo" />
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/explorework">Explore Work</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/contactus">Contact Us</Link>
        </nav>
     
    </>
  );
}

const CoreNavbar = () => {
  return (
    <>

      <div id="bannerBg">
        <img id="mainImage" src={bannerBg} alt="Banner Background" />

        <Navbar/>
      </div>

        <div id="middleMainContainer">
          <p id="para1">WE PROVIDE EVERYTHING</p>
          <p id="para2">
            <span>INTERIOR</span> DESIGNER
          </p>
          <a className="cta" href="#discover">
            Discover More
          </a>
        </div>
    </>
  )
}

export { Navbar, CoreNavbar}


