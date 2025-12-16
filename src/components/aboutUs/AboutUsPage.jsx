import { React , useState , useEffect } from 'react'
import { Navbar } from "../homePage/Navbar.jsx";
import aboutUsFirstIMG from "../../assets/aboutUsFirstIMG.jpeg";
import CustomerSupportImage from "../../assets/CustomerSupportImage.png";
import CustomerCareImage from "../../assets/CustomerCareImage.png";
import EasyToCustomizeImage from "../../assets/EasyToCustomizeImage.png";
import AboutUsSectionLeftSideImage from "../../assets/AboutUsSectionLeftSideImage.png";
import HireUsToWork from './HireUsToWork.jsx';
import Footer from "../homePage/Footer.jsx";

const cardImages = [
  "https://animemotivation.com/wp-content/uploads/2018/10/beautiful-anime-girl-wallpaper-cute-smile-1.jpg.webp",
  "https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg",
  "https://animemotivation.com/wp-content/uploads/2018/10/beautiful-anime-girl-wallpaper-cute-smile-1.jpg.webp",
  "https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg"
];

{/* leftSide images */}
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d",
  "66f3198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
];


const AboutUsPage = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);

    const items = document.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");

      title.addEventListener("click", () => {
        if (content.style.maxHeight) {
          content.style.maxHeight = null; 
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });


  };

  {/* ------------ CARD STACK RIGHT SIDE IMAGES ------------ */}
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => startSwipe(), 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const startSwipe = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500); // match CSS animation duration
  };

  const leftImage = images[currentIndex];
  const rightImage = images[(currentIndex + 1) % images.length];
  const nextImage = images[(currentIndex + 2) % images.length];

  return (
    <>
      <Navbar/>
      <div id='firstHalf'>
        <img style={{display: 'block', overflow: 'hidden' , objectFit: 'contain'}} src={ aboutUsFirstIMG } height={580} width={1800}></img>
          <div id='MiddleTextContainer'>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div id='firstHalfFirstMiddleTextContainer'>
                <span style={{color:'#FF565B'}}>ABOUT </span>DESIGNER
            </div>
            <div style={{fontFamily:'sans-serif', font:'message-box', margin:29}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua
            </div>
            </div>
          </div>
      </div>
      <div className="feature-container">
        <div className="feature-card">
          <div className="icon"><img src={CustomerSupportImage} height={50} width={69}></img></div>
          <h3>Active Support 24/7</h3>
        </div>

        <div className="feature-card">
          <div className="icon"><img src={CustomerCareImage} height={50} width={80}></img></div>
          <h3>Customer Care</h3>
        </div>

        <div className="feature-card">
          <div className="icon"><img src={EasyToCustomizeImage} height={50} width={70}></img></div>
          <h3>Easy to Customize</h3>
        </div>
      </div>

      <div id="childContainer2">
              
              {/* ------------ TOP TEXT LEFT ------------ */}
              <div id="divtextDiv1">
                <p id="secondPartFirstText" style={{paddingTop:'8%', paddingLeft:'7.8%'}}>EXPLORE SOME OF OUR LATEST</p>
      
                <p
                  style={{
                    color: "black",
                    paddingLeft: '8.1%',
                    paddingTop: "-6px",
                    fontSize: "35px",
                    fontWeight: 700,
                    fontFamily:"sans-serif"
                  }}
                >
                  ⸻ <strong id="secondPartSecondText">INTERIOR DESIGN WORK<span style={{color:"black"}}>.</span></strong>
                </p>
              </div>
      
              {/* ------------ MAIN LEFT IMAGE + OVERLAY ------------ */}
              <div id="AboutUssecondImage">
                  <img src={AboutUsSectionLeftSideImage} width={'85.9%'} height={'20%'} style={{borderRadius:9}}/>
              </div>
              
              <div
                style={{
                  width: "48%",
                  paddingTop: "4%",
                  paddingLeft: "2%",
                  fontFamily: "sans-serif",
                }}
              >

                {/* ------------ PARAGRAPH SECTION ------------ */}
              
                <div id="wrapper">
    
          <div id="paragraphSection"> 
          <p id="paragraph">
          Designer HTML5 Template is 100% free to download provided by TemplateMo website. You are allowed to use this template for your commercial or business websites. You are <span style={{  }}></span> NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.
          </p>

          <p id="paragraph">
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* ------------ TITLE ------------ */}
          <p id="heading">How It Works</p>

          {/* ------------ ACCORDION ITEM 1 ------------ */}
          <div className="accordion-item" onClick={() => toggle(1)}>
            <div className="accordion-title">
              <span style={{
                borderBottom:'2px solid rgb(246, 240, 241)',
                width: '100%',
                }}><p style={{ paddingBottom:1 }}>What is Interior Design?</p></span>
              <span style={{ fontSize: "20px" }}>{openIndex === 1 ? "⌃" : "⌄"}</span>
            </div>

            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === 1 ? "300px" : "0px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          {/* ------------ ACCORDION ITEM 2 ------------ */}
          <div className="accordion-item" onClick={() => toggle(2)}>
            <div className="accordion-title">
            <span style={{
                borderBottom:'2px solid rgb(246, 240, 241)',
                width: '100%',
                }}><p style={{ paddingBottom:1 }}>What is Exterior Decoration?</p></span>
              <span style={{ fontSize: "20px" }}>{openIndex === 2 ? "⌃" : "⌄"}</span>
            </div>

            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === 2 ? "300px" : "0px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          {/* ------------ ACCORDION ITEM 3 ------------ */}
          <div className="accordion-item" onClick={() => toggle(3)}>
            <div className="accordion-title">
            <span style={{
                borderBottom:'2px solid rgb(246, 240, 241)',
                width: '100%',
                }}><p style={{ paddingBottom:1 }}>3D Rendering Models</p></span>
              <span style={{ fontSize: "20px" }}>{openIndex === 3 ? "⌃" : "⌄"}</span>
            </div>

            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === 3 ? "300px" : "0px"
              }}
            >
              
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          </div>


            </div>
              </div>

              {/* ------------ CARD STACK RIGHT SIDE ------------ */}

              <div className="inside-carousel-container">
        {/* Left card */}
        <div className={`card left-card ${animating ? "swipe-left" : ""}`}>
          <div className="card-inner">
            <img src={leftImage} alt="Left Card" />
          </div>
        </div>

        {/* Right card */}
        <div className={`card right-card ${animating ? "swipe-left" : ""}`}>
          <div className="card-inner">
            <img src={rightImage} alt="Right Card" />
          </div>
        </div>

        {/* Next card overlays right card during animation */}
        {animating && (
          <div className="card right-card next-card">
            <div className="card-inner">
              <img src={nextImage} alt="Next Card" />
            </div>
          </div>
        )}
      </div>

      </div>

      <HireUsToWork/>
      <Footer/>

    </>
  )
}

export default AboutUsPage