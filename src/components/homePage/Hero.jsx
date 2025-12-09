import banner from "../../assets/banner-bg.png";

export default function Hero() {
  return (
    <div id="childContainer1">
      <div id="bannerBg">
        <img id="mainImage" src={banner} alt="Banner Background" />
        <div id="middleMainContainer">
          <p id="para1">WE PROVIDE EVERYTHING</p>
          <p id="para2"><span>INTERIOR</span> DESIGNER</p>
          <a className="cta" href="#discover">Discover More</a>
        </div>
      </div>
    </div>
  );
}
